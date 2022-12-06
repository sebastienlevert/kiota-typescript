import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosHomeScreenItem} from './deserializeIntoIosHomeScreenItem';
import {IosHomeScreenItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenItemCollectionResponse(iosHomeScreenItemCollectionResponse: IosHomeScreenItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosHomeScreenItemCollectionResponse),
        "value": n => { iosHomeScreenItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenItem) as any ; },
    }
}
