[Quasar Framework](../index.md) / [Exports](../modules.md) / components/api

# Module: components/api

## Table of contents

### Namespaces

- [propOptions](components_api.propOptions.md)

### Interfaces

- [PropOptions](../interfaces/components_api.PropOptions.md)
- [PropOptionsDefault](../interfaces/components_api.PropOptionsDefault.md)
- [PropOptionsRequired](../interfaces/components_api.PropOptionsRequired.md)

### Functions

- [injectRequire](components_api.md#injectrequire)
- [propOptions](components_api.md#propoptions)
- [propOptionsDefault](components_api.md#propoptionsdefault)
- [propOptionsRequired](components_api.md#propoptionsrequired)

## Functions

### injectRequire

▸ **injectRequire**<`T`\>(`key`): `T`

Injects required value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `InjectionKey`<`T`\> | Key. |

#### Returns

`T`

Value.

___

### propOptions

▸ **propOptions**<`T`\>(`validator`): [`PropOptions`](../interfaces/components_api.PropOptions.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |

#### Returns

[`PropOptions`](../interfaces/components_api.PropOptions.md)<`T`\>

Vue property.

___

### propOptionsDefault

▸ **propOptionsDefault**<`T`\>(`validator`, `defVal`): [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |
| `defVal` | `T` | Default value. |

#### Returns

[`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Vue property.

___

### propOptionsRequired

▸ **propOptionsRequired**<`T`\>(`validator`): [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Creates Vue property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |

#### Returns

[`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Vue property.
