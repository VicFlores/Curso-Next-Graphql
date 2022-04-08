import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Attributes = {
  __typename?: 'Attributes';
  description: Scalars['String'];
  hardiness: Scalars['String'];
  shape: Scalars['String'];
  taste: Scalars['String'];
};

export type AvoCreateInput = {
  description: Scalars['String'];
  hardiness: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  shape: Scalars['String'];
  sku: Scalars['String'];
  taste: Scalars['String'];
};

export type Avocado = BaseModel & {
  __typename?: 'Avocado';
  _id: Scalars['ID'];
  attributes: Attributes;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  sku: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Avocados */
export type BaseModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LoginUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: Scalars['String'];
  createAvo: Scalars['String'];
  deleteUser: Scalars['String'];
  updateUser: Scalars['String'];
};

export type MutationAddUserArgs = {
  input: UserInput;
};

export type MutationCreateAvoArgs = {
  data: AvoCreateInput;
};

export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};

export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  LoginUser?: Maybe<Token>;
  avo?: Maybe<Avocado>;
  avos: Array<Maybe<Avocado>>;
  findAllUsers?: Maybe<Array<Maybe<Users>>>;
  findOneUser?: Maybe<Users>;
};

export type QueryLoginUserArgs = {
  input: LoginUser;
};

export type QueryAvoArgs = {
  _id: Scalars['ID'];
};

export type QueryAvosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type QueryFindOneUserArgs = {
  _id: Scalars['ID'];
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

/** Users */
export type Users = {
  __typename?: 'Users';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type AvocadoFragment = {
  __typename?: 'Avocado';
  _id: string;
  image: string;
  name: string;
  createdAt: any;
  sku: string;
  price: number;
  attributes: {
    __typename?: 'Attributes';
    description: string;
    taste: string;
    shape: string;
    hardiness: string;
  };
};

export type AvosQueryVariables = Exact<{ [key: string]: never }>;

export type AvosQuery = {
  __typename?: 'Query';
  avos: Array<{
    __typename?: 'Avocado';
    _id: string;
    image: string;
    name: string;
    createdAt: any;
    sku: string;
    price: number;
    attributes: {
      __typename?: 'Attributes';
      description: string;
      taste: string;
      shape: string;
      hardiness: string;
    };
  } | null>;
};

export type AvoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type AvoQuery = {
  __typename?: 'Query';
  avo?: {
    __typename?: 'Avocado';
    _id: string;
    image: string;
    name: string;
    createdAt: any;
    sku: string;
    price: number;
    attributes: {
      __typename?: 'Attributes';
      description: string;
      taste: string;
      shape: string;
      hardiness: string;
    };
  } | null;
};

export const AvocadoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Avocado' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Avocado' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'taste' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shape' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hardiness' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AvocadoFragment, unknown>;
export const AvosDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'avos' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Avocado' },
                },
              ],
            },
          },
        ],
      },
    },
    ...AvocadoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AvosQuery, AvosQueryVariables>;
export const AvoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Avo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Avocado' },
                },
              ],
            },
          },
        ],
      },
    },
    ...AvocadoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AvoQuery, AvoQueryVariables>;
