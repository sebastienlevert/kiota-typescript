import {StringKeyStringValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringKeyStringValuePair(writer: SerializationWriter, stringKeyStringValuePair: StringKeyStringValuePair | undefined = {}) : void {
            writer.writeStringValue("key", stringKeyStringValuePair.key);
            writer.writeStringValue("value", stringKeyStringValuePair.value);
}
