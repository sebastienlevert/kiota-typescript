import {PublicationFacet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicationFacet(writer: SerializationWriter, publicationFacet: PublicationFacet | undefined = {}) : void {
            writer.writeStringValue("level", publicationFacet.level);
            writer.writeStringValue("versionId", publicationFacet.versionId);
}
