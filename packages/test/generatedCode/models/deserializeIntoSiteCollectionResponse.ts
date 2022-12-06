import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSite} from './deserializeIntoSite';
import {SiteCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteCollectionResponse(siteCollectionResponse: SiteCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(siteCollectionResponse),
        "value": n => { siteCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
    }
}
