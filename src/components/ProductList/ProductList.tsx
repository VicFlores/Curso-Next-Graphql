import React from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';
import Image from 'next/image';
import { getImgUrl } from '../../utils/assets';
import type { AvocadoFragment } from '../../generated/graphql';

type ProductListProps = {
  products: AvocadoFragment[];
};

const mapProductsToCards = (products: AvocadoFragment[]) =>
  products.map(({ name, _id, price, image }) => (
    <Link key={_id} href={`/product/${_id}`} passHref>
      <Card
        as="a"
        header={name}
        image={{
          children: <Image src={image} width={333} height={333} alt={name} />,
        }}
        meta={{
          children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
        }}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
);

export default ProductList;
