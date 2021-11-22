[Quasar Framework](../index.md) / [Exports](../modules.md) / [components/api](components_api.md) / propOptions

# Namespace: propOptions

[components/api](components_api.md).propOptions

## Table of contents

### Variables

- [default](components_api.propOptions.md#default)
- [required](components_api.propOptions.md#required)

## Variables

### default

• **default**: <T\>(`validator`: `Guard`<`T`\>, `defVal`: `T`) => [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

#### Type declaration

▸ <`T`\>(`validator`, `defVal`): [`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Creates Vue property.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |
| `defVal` | `T` | Default value. |

##### Returns

[`PropOptionsDefault`](../interfaces/components_api.PropOptionsDefault.md)<`T`\>

Vue property.

___

### required

• **required**: <T\>(`validator`: `Guard`<`T`\>) => [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

#### Type declaration

▸ <`T`\>(`validator`): [`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Creates Vue property.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validator` | `Guard`<`T`\> | Validator. |

##### Returns

[`PropOptionsRequired`](../interfaces/components_api.PropOptionsRequired.md)<`T`\>

Vue property.
