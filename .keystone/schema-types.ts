type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type DrinkImageRelateToOneInput = {
  readonly create?: DrinkImageCreateInput | null;
  readonly connect?: DrinkImageWhereUniqueInput | null;
  readonly disconnect?: DrinkImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type DrinkRelateToManyInput = {
  readonly create?: ReadonlyArray<DrinkCreateInput | null> | null;
  readonly connect?: ReadonlyArray<DrinkWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<DrinkWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type DrinkWhereInput = {
  readonly AND?: ReadonlyArray<DrinkWhereInput | null> | null;
  readonly OR?: ReadonlyArray<DrinkWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly ingredients?: Scalars['String'] | null;
  readonly ingredients_not?: Scalars['String'] | null;
  readonly ingredients_contains?: Scalars['String'] | null;
  readonly ingredients_not_contains?: Scalars['String'] | null;
  readonly ingredients_starts_with?: Scalars['String'] | null;
  readonly ingredients_not_starts_with?: Scalars['String'] | null;
  readonly ingredients_ends_with?: Scalars['String'] | null;
  readonly ingredients_not_ends_with?: Scalars['String'] | null;
  readonly ingredients_i?: Scalars['String'] | null;
  readonly ingredients_not_i?: Scalars['String'] | null;
  readonly ingredients_contains_i?: Scalars['String'] | null;
  readonly ingredients_not_contains_i?: Scalars['String'] | null;
  readonly ingredients_starts_with_i?: Scalars['String'] | null;
  readonly ingredients_not_starts_with_i?: Scalars['String'] | null;
  readonly ingredients_ends_with_i?: Scalars['String'] | null;
  readonly ingredients_not_ends_with_i?: Scalars['String'] | null;
  readonly ingredients_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly ingredients_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly preparation?: Scalars['String'] | null;
  readonly preparation_not?: Scalars['String'] | null;
  readonly preparation_contains?: Scalars['String'] | null;
  readonly preparation_not_contains?: Scalars['String'] | null;
  readonly preparation_starts_with?: Scalars['String'] | null;
  readonly preparation_not_starts_with?: Scalars['String'] | null;
  readonly preparation_ends_with?: Scalars['String'] | null;
  readonly preparation_not_ends_with?: Scalars['String'] | null;
  readonly preparation_i?: Scalars['String'] | null;
  readonly preparation_not_i?: Scalars['String'] | null;
  readonly preparation_contains_i?: Scalars['String'] | null;
  readonly preparation_not_contains_i?: Scalars['String'] | null;
  readonly preparation_starts_with_i?: Scalars['String'] | null;
  readonly preparation_not_starts_with_i?: Scalars['String'] | null;
  readonly preparation_ends_with_i?: Scalars['String'] | null;
  readonly preparation_not_ends_with_i?: Scalars['String'] | null;
  readonly preparation_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly preparation_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: DrinkImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly barware?: Scalars['String'] | null;
  readonly barware_not?: Scalars['String'] | null;
  readonly barware_contains?: Scalars['String'] | null;
  readonly barware_not_contains?: Scalars['String'] | null;
  readonly barware_starts_with?: Scalars['String'] | null;
  readonly barware_not_starts_with?: Scalars['String'] | null;
  readonly barware_ends_with?: Scalars['String'] | null;
  readonly barware_not_ends_with?: Scalars['String'] | null;
  readonly barware_i?: Scalars['String'] | null;
  readonly barware_not_i?: Scalars['String'] | null;
  readonly barware_contains_i?: Scalars['String'] | null;
  readonly barware_not_contains_i?: Scalars['String'] | null;
  readonly barware_starts_with_i?: Scalars['String'] | null;
  readonly barware_not_starts_with_i?: Scalars['String'] | null;
  readonly barware_ends_with_i?: Scalars['String'] | null;
  readonly barware_not_ends_with_i?: Scalars['String'] | null;
  readonly barware_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly barware_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly relatedDrinks_every?: DrinkWhereInput | null;
  readonly relatedDrinks_some?: DrinkWhereInput | null;
  readonly relatedDrinks_none?: DrinkWhereInput | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type DrinkWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortDrinksBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'ingredients_ASC'
  | 'ingredients_DESC'
  | 'preparation_ASC'
  | 'preparation_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'barware_ASC'
  | 'barware_DESC'
  | 'relatedDrinks_ASC'
  | 'relatedDrinks_DESC'
  | 'status_ASC'
  | 'status_DESC';

export type DrinkUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly ingredients?: Scalars['String'] | null;
  readonly preparation?: Scalars['String'] | null;
  readonly photo?: DrinkImageRelateToOneInput | null;
  readonly barware?: Scalars['String'] | null;
  readonly relatedDrinks?: DrinkRelateToManyInput | null;
  readonly status?: Scalars['String'] | null;
};

export type DrinksUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: DrinkUpdateInput | null;
};

export type DrinkCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly ingredients?: Scalars['String'] | null;
  readonly preparation?: Scalars['String'] | null;
  readonly photo?: DrinkImageRelateToOneInput | null;
  readonly barware?: Scalars['String'] | null;
  readonly relatedDrinks?: DrinkRelateToManyInput | null;
  readonly status?: Scalars['String'] | null;
};

export type DrinksCreateInput = {
  readonly data?: DrinkCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type DrinkRelateToOneInput = {
  readonly create?: DrinkCreateInput | null;
  readonly connect?: DrinkWhereUniqueInput | null;
  readonly disconnect?: DrinkWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type DrinkImageWhereInput = {
  readonly AND?: ReadonlyArray<DrinkImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<DrinkImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly drink?: DrinkWhereInput | null;
  readonly drink_is_null?: Scalars['Boolean'] | null;
};

export type DrinkImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortDrinkImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'drink_ASC'
  | 'drink_DESC';

export type DrinkImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly drink?: DrinkRelateToOneInput | null;
};

export type DrinkImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: DrinkImageUpdateInput | null;
};

export type DrinkImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly drink?: DrinkRelateToOneInput | null;
};

export type DrinkImagesCreateInput = {
  readonly data?: DrinkImageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type DrinkListTypeInfo = {
  key: 'Drink';
  fields:
    | 'id'
    | 'name'
    | 'ingredients'
    | 'preparation'
    | 'photo'
    | 'barware'
    | 'relatedDrinks'
    | 'status';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly ingredients?: string | null;
    readonly preparation?: string | null;
    readonly photo?: string | null;
    readonly barware?: string | null;
    readonly relatedDrinks?: string | null;
    readonly status?: string | null;
  };
  inputs: {
    where: DrinkWhereInput;
    create: DrinkCreateInput;
    update: DrinkUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: DrinkWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortDrinksBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type DrinkListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    DrinkListTypeInfo,
    DrinkListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  DrinkListTypeInfo,
  DrinkListTypeInfo['fields']
>;

export type DrinkImageListTypeInfo = {
  key: 'DrinkImage';
  fields: 'id' | 'image' | 'altText' | 'drink';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly drink?: string | null;
  };
  inputs: {
    where: DrinkImageWhereInput;
    create: DrinkImageCreateInput;
    update: DrinkImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: DrinkImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortDrinkImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type DrinkImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    DrinkImageListTypeInfo,
    DrinkImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  DrinkImageListTypeInfo,
  DrinkImageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Drink: DrinkListTypeInfo;
  readonly DrinkImage: DrinkImageListTypeInfo;
};
