import {deserializeIntoOutlookTask} from './deserializeIntoOutlookTask';
import {OutlookTaskCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookTaskCollectionResponse(outlookTaskCollectionResponse: OutlookTaskCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { outlookTaskCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { outlookTaskCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTask) as any ; },
    }
}
