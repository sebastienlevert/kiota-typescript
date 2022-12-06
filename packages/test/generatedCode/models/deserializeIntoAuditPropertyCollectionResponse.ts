import {deserializeIntoAuditProperty} from './deserializeIntoAuditProperty';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AuditPropertyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditPropertyCollectionResponse(auditPropertyCollectionResponse: AuditPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(auditPropertyCollectionResponse),
        "value": n => { auditPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuditProperty) as any ; },
    }
}
