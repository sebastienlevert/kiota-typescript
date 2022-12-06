import {DirectoryAuditCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryAudit} from './serializeDirectoryAudit';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryAuditCollectionResponse(writer: SerializationWriter, directoryAuditCollectionResponse: DirectoryAuditCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryAuditCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", directoryAuditCollectionResponse.value as any, serializeDirectoryAudit);
}
