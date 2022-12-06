import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSiteSource} from './deserializeIntoSiteSource';
import {SiteSourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteSourceCollectionResponse(siteSourceCollectionResponse: SiteSourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(siteSourceCollectionResponse),
        "value": n => { siteSourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSiteSource) as any ; },
    }
}
