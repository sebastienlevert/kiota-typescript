import {AuditEventCollectionResponse} from './index';
import {serializeAuditEvent} from './serializeAuditEvent';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditEventCollectionResponse(writer: SerializationWriter, auditEventCollectionResponse: AuditEventCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, auditEventCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", auditEventCollectionResponse.value as any, serializeAuditEvent);
}
