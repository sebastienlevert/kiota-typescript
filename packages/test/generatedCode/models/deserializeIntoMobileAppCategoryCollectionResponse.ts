import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMobileAppCategory} from './deserializeIntoMobileAppCategory';
import {MobileAppCategoryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCategoryCollectionResponse(mobileAppCategoryCollectionResponse: MobileAppCategoryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppCategoryCollectionResponse),
        "value": n => { mobileAppCategoryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileAppCategory) as any ; },
    }
}
