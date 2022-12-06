import {DirectoryRoleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryRole} from './serializeDirectoryRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleCollectionResponse(writer: SerializationWriter, directoryRoleCollectionResponse: DirectoryRoleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryRoleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", directoryRoleCollectionResponse.value as any, serializeDirectoryRole);
}
