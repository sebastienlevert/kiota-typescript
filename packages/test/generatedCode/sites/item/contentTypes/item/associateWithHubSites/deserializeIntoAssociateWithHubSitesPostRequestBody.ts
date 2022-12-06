import {AssociateWithHubSitesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssociateWithHubSitesPostRequestBody(associateWithHubSitesPostRequestBody: AssociateWithHubSitesPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hubSiteUrls": n => { associateWithHubSitesPostRequestBody.hubSiteUrls = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "propagateToExistingLists": n => { associateWithHubSitesPostRequestBody.propagateToExistingLists = n.getBooleanValue() as any ; },
    }
}
