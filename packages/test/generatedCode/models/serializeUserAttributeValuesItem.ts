import {UserAttributeValuesItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserAttributeValuesItem(writer: SerializationWriter, userAttributeValuesItem: UserAttributeValuesItem | undefined = {}) : void {
            writer.writeBooleanValue("isDefault", userAttributeValuesItem.isDefault);
            writer.writeStringValue("name", userAttributeValuesItem.name);
            writer.writeStringValue("@odata.type", userAttributeValuesItem.odataType);
            writer.writeStringValue("value", userAttributeValuesItem.value);
}
