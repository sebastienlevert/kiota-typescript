import {AuditResourceCollectionResponse} from './index';
import {serializeAuditResource} from './serializeAuditResource';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditResourceCollectionResponse(writer: SerializationWriter, auditResourceCollectionResponse: AuditResourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, auditResourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", auditResourceCollectionResponse.value as any, serializeAuditResource);
}
