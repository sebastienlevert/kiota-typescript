import {UserAttributeValuesItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAttributeValuesItem(userAttributeValuesItem: UserAttributeValuesItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isDefault": n => { userAttributeValuesItem.isDefault = n.getBooleanValue() as any ; },
        "name": n => { userAttributeValuesItem.name = n.getStringValue() as any ; },
        "@odata.type": n => { userAttributeValuesItem.odataType = n.getStringValue() as any ; },
        "value": n => { userAttributeValuesItem.value = n.getStringValue() as any ; },
    }
}
