import {deserializeIntoOutlookCategory} from './deserializeIntoOutlookCategory';
import {OutlookCategoryCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookCategoryCollectionResponse(outlookCategoryCollectionResponse: OutlookCategoryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { outlookCategoryCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { outlookCategoryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookCategory) as any ; },
    }
}
