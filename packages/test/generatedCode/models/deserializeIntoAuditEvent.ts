import {deserializeIntoAuditActor} from './deserializeIntoAuditActor';
import {deserializeIntoAuditResource} from './deserializeIntoAuditResource';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AuditEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditEvent(auditEvent: AuditEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(auditEvent),
        "activity": n => { auditEvent.activity = n.getStringValue() as any ; },
        "activityDateTime": n => { auditEvent.activityDateTime = n.getDateValue() as any ; },
        "activityOperationType": n => { auditEvent.activityOperationType = n.getStringValue() as any ; },
        "activityResult": n => { auditEvent.activityResult = n.getStringValue() as any ; },
        "activityType": n => { auditEvent.activityType = n.getStringValue() as any ; },
        "actor": n => { auditEvent.actor = n.getObject(deserializeIntoAuditActor) as any ; },
        "category": n => { auditEvent.category = n.getStringValue() as any ; },
        "componentName": n => { auditEvent.componentName = n.getStringValue() as any ; },
        "correlationId": n => { auditEvent.correlationId = n.getStringValue() as any ; },
        "displayName": n => { auditEvent.displayName = n.getStringValue() as any ; },
        "resources": n => { auditEvent.resources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuditResource) as any ; },
    }
}
