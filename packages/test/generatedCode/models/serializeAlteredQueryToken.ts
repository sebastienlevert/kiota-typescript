import {AlteredQueryToken} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlteredQueryToken(writer: SerializationWriter, alteredQueryToken: AlteredQueryToken | undefined = {}) : void {
            writer.writeNumberValue("length", alteredQueryToken.length);
            writer.writeStringValue("@odata.type", alteredQueryToken.odataType);
            writer.writeNumberValue("offset", alteredQueryToken.offset);
            writer.writeStringValue("suggestion", alteredQueryToken.suggestion);
}
