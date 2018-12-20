/**
 * This file is automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 * 
 * For better typings, you should provide configuration for how to lookup 
 * the types. See the documentation for "typegenAutoConfig"
 */
import * as types from "../types"
import * as prisma from "./prisma-client/index"

declare global {
  interface GraphQLNexusGen extends GraphQLNexusGenTypes {}
}

// Maybe Promise
export type MaybePromise<T> = T | PromiseLike<T>;

// Maybe Promise List
export type MaybePromiseList<T> = Array<MaybePromise<T>>;

// Maybe Thunk
export type MaybeThunk<T> = T | (() => T);

// Maybe Thunk, with args
export type MaybeThunkArgs<T, A> = T | ((args?: A) => T);

export type QueryFeedReturnType = MaybePromiseList<Post_ReturnType>;

export type QueryFilterPostsReturnType = MaybePromiseList<Post_ReturnType>;

export interface QueryFilterPostsArgs {
  searchString: string;
}

export type QueryPostReturnType = null | Post_ReturnType;

export interface QueryPostArgs {
  where: PostWhereUniqueInput;
}

export type QueryRootType = {};

export type Query_ReturnType = {};

export type PostAuthorReturnType = User_ReturnType;

export type PostContentReturnType = null | string;

export type PostCreatedAtReturnType = unknown;

export type PostIdReturnType = string;

export type PostPublishedReturnType = boolean;

export type PostTitleReturnType = string;

export type PostUpdatedAtReturnType = unknown;

export type PostRootType = prisma.Post;

export type Post_ReturnType = prisma.Post

export type UserEmailReturnType = string;

export type UserIdReturnType = string;

export type UserNameReturnType = null | string;

export type UserPostsReturnType = MaybePromiseList<Post_ReturnType>;

export interface UserPostsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | PostOrderByInput;
  skip?: null | number;
  where?: null | PostWhereInput;
}

export type UserRootType = prisma.User;

export type User_ReturnType = prisma.User

export type PostOrderByInput = "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "published_ASC" | "published_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export interface PostWhereInput {
  AND: PostWhereInput[];
  author?: null | UserWhereInput;
  content?: null | string;
  content_contains?: null | string;
  content_ends_with?: null | string;
  content_gt?: null | string;
  content_gte?: null | string;
  content_in: string[];
  content_lt?: null | string;
  content_lte?: null | string;
  content_not?: null | string;
  content_not_contains?: null | string;
  content_not_ends_with?: null | string;
  content_not_in: string[];
  content_not_starts_with?: null | string;
  content_starts_with?: null | string;
  createdAt?: null | unknown;
  createdAt_gt?: null | unknown;
  createdAt_gte?: null | unknown;
  createdAt_in: unknown[];
  createdAt_lt?: null | unknown;
  createdAt_lte?: null | unknown;
  createdAt_not?: null | unknown;
  createdAt_not_in: unknown[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  NOT: PostWhereInput[];
  OR: PostWhereInput[];
  published?: null | boolean;
  published_not?: null | boolean;
  title?: null | string;
  title_contains?: null | string;
  title_ends_with?: null | string;
  title_gt?: null | string;
  title_gte?: null | string;
  title_in: string[];
  title_lt?: null | string;
  title_lte?: null | string;
  title_not?: null | string;
  title_not_contains?: null | string;
  title_not_ends_with?: null | string;
  title_not_in: string[];
  title_not_starts_with?: null | string;
  title_starts_with?: null | string;
  updatedAt?: null | unknown;
  updatedAt_gt?: null | unknown;
  updatedAt_gte?: null | unknown;
  updatedAt_in: unknown[];
  updatedAt_lt?: null | unknown;
  updatedAt_lte?: null | unknown;
  updatedAt_not?: null | unknown;
  updatedAt_not_in: unknown[];
}

export interface UserWhereInput {
  AND: UserWhereInput[];
  email?: null | string;
  email_contains?: null | string;
  email_ends_with?: null | string;
  email_gt?: null | string;
  email_gte?: null | string;
  email_in: string[];
  email_lt?: null | string;
  email_lte?: null | string;
  email_not?: null | string;
  email_not_contains?: null | string;
  email_not_ends_with?: null | string;
  email_not_in: string[];
  email_not_starts_with?: null | string;
  email_starts_with?: null | string;
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: UserWhereInput[];
  OR: UserWhereInput[];
  posts_every?: null | PostWhereInput;
  posts_none?: null | PostWhereInput;
  posts_some?: null | PostWhereInput;
}

export interface PostWhereUniqueInput {
  id?: null | string;
}

export type MutationCreateDraftReturnType = Post_ReturnType;

export interface MutationCreateDraftArgs {
  authorEmail: string;
  content: string;
  title: string;
}

export type MutationDeletePostReturnType = null | Post_ReturnType;

export interface MutationDeletePostArgs {
  id: string;
}

export type MutationPublishReturnType = Post_ReturnType;

export interface MutationPublishArgs {
  id: string;
}

export type MutationSignupUserReturnType = User_ReturnType;

export interface MutationSignupUserArgs {
  email: string;
  name: string;
}

export type MutationRootType = {};

export type Mutation_ReturnType = {};

export interface GraphQLNexusGenArgTypes {
  Query: {
    filterPosts: QueryFilterPostsArgs;
    post: QueryPostArgs;
  };
  User: {
    posts: UserPostsArgs;
  };
  Mutation: {
    createDraft: MutationCreateDraftArgs;
    deletePost: MutationDeletePostArgs;
    publish: MutationPublishArgs;
    signupUser: MutationSignupUserArgs;
  };
}

export interface GraphQLNexusGenRootTypes {
  Query: QueryRootType;
  Post: PostRootType;
  User: UserRootType;
  Mutation: MutationRootType;
}

export interface GraphQLNexusGenReturnTypes {
  Query: {
    feed: QueryFeedReturnType;
    filterPosts: QueryFilterPostsReturnType;
    post: QueryPostReturnType;
  };
  Post: {
    author: PostAuthorReturnType;
    content: PostContentReturnType;
    createdAt: PostCreatedAtReturnType;
    id: PostIdReturnType;
    published: PostPublishedReturnType;
    title: PostTitleReturnType;
    updatedAt: PostUpdatedAtReturnType;
  };
  User: {
    email: UserEmailReturnType;
    id: UserIdReturnType;
    name: UserNameReturnType;
    posts: UserPostsReturnType;
  };
  Mutation: {
    createDraft: MutationCreateDraftReturnType;
    deletePost: MutationDeletePostReturnType;
    publish: MutationPublishReturnType;
    signupUser: MutationSignupUserReturnType;
  };
}

export interface GraphQLNexusGenTypes {
  argTypes: GraphQLNexusGenArgTypes;
  backingTypes: GraphQLNexusGenRootTypes;
  returnTypes: GraphQLNexusGenReturnTypes;
  context: types.Context;
  enums: {
    PostOrderByInput: PostOrderByInput;
  };
  objects: {
    Query: QueryRootType;
    Post: PostRootType;
    User: UserRootType;
    Mutation: MutationRootType;
  };
  interfaces: {};
  unions: {};
  scalars: {
    String: any;
    ID: any;
    Int: any;
    DateTime: any;
    Boolean: any;
  };
  inputObjects: {
    PostWhereInput: PostWhereInput;
    UserWhereInput: UserWhereInput;
    PostWhereUniqueInput: PostWhereUniqueInput;
  };
  allInputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
  allOutputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['objects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['unions'], string>
    | Extract<keyof GraphQLNexusGenTypes['interfaces'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
}

export type Gen = GraphQLNexusGenTypes;
