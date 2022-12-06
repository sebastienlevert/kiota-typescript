import {PersonType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonType(writer: SerializationWriter, personType: PersonType | undefined = {}) : void {
            writer.writeStringValue("class", personType.class_escaped);
            writer.writeStringValue("@odata.type", personType.odataType);
            writer.writeStringValue("subclass", personType.subclass);
}
