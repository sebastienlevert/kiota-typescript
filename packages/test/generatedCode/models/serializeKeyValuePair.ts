import {KeyValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValuePair(writer: SerializationWriter, keyValuePair: KeyValuePair | undefined = {}) : void {
            writer.writeStringValue("name", keyValuePair.name);
            writer.writeStringValue("value", keyValuePair.value);
}
