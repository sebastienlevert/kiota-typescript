import {PersonAward} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonAward(writer: SerializationWriter, personAward: PersonAward | undefined = {}) : void {
        serializeItemFacet(writer, personAward)
            writer.writeStringValue("description", personAward.description);
            writer.writeStringValue("displayName", personAward.displayName);
            writer.writeDateOnlyValue("issuedDate", personAward.issuedDate);
            writer.writeStringValue("issuingAuthority", personAward.issuingAuthority);
            writer.writeStringValue("thumbnailUrl", personAward.thumbnailUrl);
            writer.writeStringValue("webUrl", personAward.webUrl);
}
