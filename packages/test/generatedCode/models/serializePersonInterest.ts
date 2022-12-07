import {PersonInterest} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonInterest(writer: SerializationWriter, personInterest: PersonInterest | undefined = {}) : void {
        serializeItemFacet(writer, personInterest)
            writer.writeCollectionOfPrimitiveValues<string>("categories", personInterest.categories);
            writer.writeCollectionOfPrimitiveValues<string>("collaborationTags", personInterest.collaborationTags);
            writer.writeStringValue("description", personInterest.description);
            writer.writeStringValue("displayName", personInterest.displayName);
            writer.writeStringValue("thumbnailUrl", personInterest.thumbnailUrl);
            writer.writeStringValue("webUrl", personInterest.webUrl);
}
