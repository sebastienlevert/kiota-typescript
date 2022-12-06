import {deserializeIntoAuditEvent} from './deserializeIntoAuditEvent';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuditEventCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditEventCollectionResponse(auditEventCollectionResponse: AuditEventCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(auditEventCollectionResponse),
        "value": n => { auditEventCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuditEvent) as any ; },
    }
}
