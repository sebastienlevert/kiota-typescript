import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWebsite} from './deserializeIntoWebsite';
import {WebsiteCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebsiteCollectionResponse(websiteCollectionResponse: WebsiteCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(websiteCollectionResponse),
        "value": n => { websiteCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWebsite) as any ; },
    }
}
