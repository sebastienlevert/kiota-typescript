import {PersonWebsite} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonWebsite(writer: SerializationWriter, personWebsite: PersonWebsite | undefined = {}) : void {
        serializeItemFacet(writer, personWebsite)
            writer.writeCollectionOfPrimitiveValues<string>("categories", personWebsite.categories);
            writer.writeStringValue("description", personWebsite.description);
            writer.writeStringValue("displayName", personWebsite.displayName);
            writer.writeStringValue("thumbnailUrl", personWebsite.thumbnailUrl);
            writer.writeStringValue("webUrl", personWebsite.webUrl);
}
