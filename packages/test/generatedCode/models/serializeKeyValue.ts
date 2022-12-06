import {KeyValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValue(writer: SerializationWriter, keyValue: KeyValue | undefined = {}) : void {
            writer.writeStringValue("key", keyValue.key);
            writer.writeStringValue("@odata.type", keyValue.odataType);
            writer.writeStringValue("value", keyValue.value);
}
