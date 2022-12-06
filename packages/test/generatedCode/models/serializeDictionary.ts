import {Dictionary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDictionary(writer: SerializationWriter, dictionary: Dictionary | undefined = {}) : void {
            writer.writeStringValue("@odata.type", dictionary.odataType);
}
