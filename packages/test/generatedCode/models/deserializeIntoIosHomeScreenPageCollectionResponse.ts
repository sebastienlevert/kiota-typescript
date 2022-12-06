import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosHomeScreenPage} from './deserializeIntoIosHomeScreenPage';
import {IosHomeScreenPageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenPageCollectionResponse(iosHomeScreenPageCollectionResponse: IosHomeScreenPageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosHomeScreenPageCollectionResponse),
        "value": n => { iosHomeScreenPageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenPage) as any ; },
    }
}
