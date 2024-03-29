import React from 'react';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { client } from '../../utils/client';
import { AvosDocument, AvoDocument } from '../../generated/graphql';
import type { AvocadoFragment } from '../../generated/graphql';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.query({ query: AvosDocument });
  const data = response.data.avos;

  const paths = data.map((avo, index) => {
    if (avo == null) {
      throw new Error(
        `An avocado entry with no data was found at index ${index}`
      );
    }

    return { params: { id: avo._id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  product: AvocadoFragment;
}> = async ({ params }) => {
  try {
    const response = await client.query({
      query: AvoDocument,
      variables: { id: params?._id as string },
    });

    if (response.data.avo == null) {
      throw new Error(`Item with id ${params?.id} was not found.`);
    }

    // Pass post data to the page via props
    return { props: { product: response.data.avo } };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title={product.name}>
      <ProductSummary product={product} />
    </Layout>
  );
};

export default ProductPage;
