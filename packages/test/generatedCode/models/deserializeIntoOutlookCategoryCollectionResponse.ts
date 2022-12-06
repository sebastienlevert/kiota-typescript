import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOutlookCategory} from './deserializeIntoOutlookCategory';
import {OutlookCategoryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookCategoryCollectionResponse(outlookCategoryCollectionResponse: OutlookCategoryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(outlookCategoryCollectionResponse),
        "value": n => { outlookCategoryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookCategory) as any ; },
    }
}
