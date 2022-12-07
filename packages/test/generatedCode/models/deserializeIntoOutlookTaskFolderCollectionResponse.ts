import {deserializeIntoOutlookTaskFolder} from './deserializeIntoOutlookTaskFolder';
import {OutlookTaskFolderCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookTaskFolderCollectionResponse(outlookTaskFolderCollectionResponse: OutlookTaskFolderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { outlookTaskFolderCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { outlookTaskFolderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookTaskFolder) as any ; },
    }
}
