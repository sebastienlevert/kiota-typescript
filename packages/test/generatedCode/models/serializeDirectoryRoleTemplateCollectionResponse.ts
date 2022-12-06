import {DirectoryRoleTemplateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryRoleTemplate} from './serializeDirectoryRoleTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleTemplateCollectionResponse(writer: SerializationWriter, directoryRoleTemplateCollectionResponse: DirectoryRoleTemplateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryRoleTemplateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", directoryRoleTemplateCollectionResponse.value as any, serializeDirectoryRoleTemplate);
}
