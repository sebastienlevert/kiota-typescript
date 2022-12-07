import {ItemPublication} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemPublication(writer: SerializationWriter, itemPublication: ItemPublication | undefined = {}) : void {
        serializeItemFacet(writer, itemPublication)
            writer.writeStringValue("description", itemPublication.description);
            writer.writeStringValue("displayName", itemPublication.displayName);
            writer.writeDateOnlyValue("publishedDate", itemPublication.publishedDate);
            writer.writeStringValue("publisher", itemPublication.publisher);
            writer.writeStringValue("thumbnailUrl", itemPublication.thumbnailUrl);
            writer.writeStringValue("webUrl", itemPublication.webUrl);
}
