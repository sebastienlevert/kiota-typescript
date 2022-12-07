import {OutlookTaskFolderCollectionResponse} from './index';
import {serializeOutlookTaskFolder} from './serializeOutlookTaskFolder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookTaskFolderCollectionResponse(writer: SerializationWriter, outlookTaskFolderCollectionResponse: OutlookTaskFolderCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", outlookTaskFolderCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", outlookTaskFolderCollectionResponse.value as any, serializeOutlookTaskFolder);
}
