import {OutlookTaskCollectionResponse} from './index';
import {serializeOutlookTask} from './serializeOutlookTask';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookTaskCollectionResponse(writer: SerializationWriter, outlookTaskCollectionResponse: OutlookTaskCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", outlookTaskCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", outlookTaskCollectionResponse.value as any, serializeOutlookTask);
}
