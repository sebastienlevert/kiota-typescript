import {deserializeIntoOutlookTaskGroup} from './deserializeIntoOutlookTaskGroup';
import {OutlookTaskGroupCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookTaskGroupCollectionResponse(outlookTaskGroupCollectionResponse: OutlookTaskGroupCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { outlookTaskGroupCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { outlookTaskGroupCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTaskGroup) as any ; },
    }
}
