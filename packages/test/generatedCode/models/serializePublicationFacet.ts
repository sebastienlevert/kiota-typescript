import {PublicationFacet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicationFacet(writer: SerializationWriter, publicationFacet: PublicationFacet | undefined = {}) : void {
            writer.writeStringValue("level", publicationFacet.level);
            writer.writeStringValue("@odata.type", publicationFacet.odataType);
            writer.writeStringValue("versionId", publicationFacet.versionId);
}
