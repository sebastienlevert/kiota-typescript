import {AuditEvent} from './index';
import {serializeAuditActor} from './serializeAuditActor';
import {serializeAuditResource} from './serializeAuditResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditEvent(writer: SerializationWriter, auditEvent: AuditEvent | undefined = {}) : void {
        serializeEntity(writer, auditEvent)
            writer.writeStringValue("activity", auditEvent.activity);
            writer.writeDateValue("activityDateTime", auditEvent.activityDateTime);
            writer.writeStringValue("activityOperationType", auditEvent.activityOperationType);
            writer.writeStringValue("activityResult", auditEvent.activityResult);
            writer.writeStringValue("activityType", auditEvent.activityType);
            writer.writeObjectValueFromMethod("actor", auditEvent.actor as any, serializeAuditActor);
            writer.writeStringValue("category", auditEvent.category);
            writer.writeStringValue("componentName", auditEvent.componentName);
            writer.writeStringValue("correlationId", auditEvent.correlationId);
            writer.writeStringValue("displayName", auditEvent.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("resources", auditEvent.resources as any, serializeAuditResource);
}
