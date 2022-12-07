import {ItemPatent} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemPatent(writer: SerializationWriter, itemPatent: ItemPatent | undefined = {}) : void {
        serializeItemFacet(writer, itemPatent)
            writer.writeStringValue("description", itemPatent.description);
            writer.writeStringValue("displayName", itemPatent.displayName);
            writer.writeBooleanValue("isPending", itemPatent.isPending);
            writer.writeDateOnlyValue("issuedDate", itemPatent.issuedDate);
            writer.writeStringValue("issuingAuthority", itemPatent.issuingAuthority);
            writer.writeStringValue("number", itemPatent.number);
            writer.writeStringValue("webUrl", itemPatent.webUrl);
}
