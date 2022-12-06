import {ContactFolderCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContactFolder} from './serializeContactFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactFolderCollectionResponse(writer: SerializationWriter, contactFolderCollectionResponse: ContactFolderCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contactFolderCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", contactFolderCollectionResponse.value as any, serializeContactFolder);
}
