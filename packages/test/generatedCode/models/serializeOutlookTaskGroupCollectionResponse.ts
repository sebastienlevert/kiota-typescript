import {OutlookTaskGroupCollectionResponse} from './index';
import {serializeOutlookTaskGroup} from './serializeOutlookTaskGroup';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookTaskGroupCollectionResponse(writer: SerializationWriter, outlookTaskGroupCollectionResponse: OutlookTaskGroupCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", outlookTaskGroupCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", outlookTaskGroupCollectionResponse.value as any, serializeOutlookTaskGroup);
}
