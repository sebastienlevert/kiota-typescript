import {DirectoryObjectCollectionResponse} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObjectCollectionResponse(writer: SerializationWriter, directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", directoryObjectCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", directoryObjectCollectionResponse.value as any, serializeDirectoryObject);
}
