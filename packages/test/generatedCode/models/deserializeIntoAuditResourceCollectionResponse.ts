import {deserializeIntoAuditResource} from './deserializeIntoAuditResource';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuditResourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditResourceCollectionResponse(auditResourceCollectionResponse: AuditResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(auditResourceCollectionResponse),
        "value": n => { auditResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuditResource) as any ; },
    }
}
