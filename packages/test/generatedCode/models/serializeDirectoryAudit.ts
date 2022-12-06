import {DirectoryAudit} from './index';
import {OperationResult} from './operationResult';
import {serializeAuditActivityInitiator} from './serializeAuditActivityInitiator';
import {serializeEntity} from './serializeEntity';
import {serializeKeyValue} from './serializeKeyValue';
import {serializeTargetResource} from './serializeTargetResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryAudit(writer: SerializationWriter, directoryAudit: DirectoryAudit | undefined = {}) : void {
        serializeEntity(writer, directoryAudit)
            writer.writeDateValue("activityDateTime", directoryAudit.activityDateTime);
            writer.writeStringValue("activityDisplayName", directoryAudit.activityDisplayName);
            writer.writeCollectionOfObjectValuesFromMethod("additionalDetails", directoryAudit.additionalDetails as any, serializeKeyValue);
            writer.writeStringValue("category", directoryAudit.category);
            writer.writeStringValue("correlationId", directoryAudit.correlationId);
            writer.writeObjectValueFromMethod("initiatedBy", directoryAudit.initiatedBy as any, serializeAuditActivityInitiator);
            writer.writeStringValue("loggedByService", directoryAudit.loggedByService);
            writer.writeStringValue("operationType", directoryAudit.operationType);
            writer.writeEnumValue<OperationResult>("result", directoryAudit.result);
            writer.writeStringValue("resultReason", directoryAudit.resultReason);
            writer.writeCollectionOfObjectValuesFromMethod("targetResources", directoryAudit.targetResources as any, serializeTargetResource);
}
