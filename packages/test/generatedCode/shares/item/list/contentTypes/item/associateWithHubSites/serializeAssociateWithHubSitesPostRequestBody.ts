import {AssociateWithHubSitesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociateWithHubSitesPostRequestBody(writer: SerializationWriter, associateWithHubSitesPostRequestBody: AssociateWithHubSitesPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("hubSiteUrls", associateWithHubSitesPostRequestBody.hubSiteUrls);
            writer.writeBooleanValue("propagateToExistingLists", associateWithHubSitesPostRequestBody.propagateToExistingLists);
}
