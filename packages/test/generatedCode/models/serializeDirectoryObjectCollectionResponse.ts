import {DirectoryObjectCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObjectCollectionResponse(writer: SerializationWriter, directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryObjectCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", directoryObjectCollectionResponse.value as any, serializeDirectoryObject);
}
