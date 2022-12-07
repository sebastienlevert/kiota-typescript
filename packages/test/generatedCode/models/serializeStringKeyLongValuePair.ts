import {StringKeyLongValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringKeyLongValuePair(writer: SerializationWriter, stringKeyLongValuePair: StringKeyLongValuePair | undefined = {}) : void {
            writer.writeStringValue("key", stringKeyLongValuePair.key);
            writer.writeNumberValue("value", stringKeyLongValuePair.value);
}
