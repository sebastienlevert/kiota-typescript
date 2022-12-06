import {deserializeIntoAuditActivityInitiator} from './deserializeIntoAuditActivityInitiator';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoKeyValue} from './deserializeIntoKeyValue';
import {deserializeIntoTargetResource} from './deserializeIntoTargetResource';
import {DirectoryAudit} from './index';
import {OperationResult} from './operationResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryAudit(directoryAudit: DirectoryAudit | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directoryAudit),
        "activityDateTime": n => { directoryAudit.activityDateTime = n.getDateValue() as any ; },
        "activityDisplayName": n => { directoryAudit.activityDisplayName = n.getStringValue() as any ; },
        "additionalDetails": n => { directoryAudit.additionalDetails = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValue) as any ; },
        "category": n => { directoryAudit.category = n.getStringValue() as any ; },
        "correlationId": n => { directoryAudit.correlationId = n.getStringValue() as any ; },
        "initiatedBy": n => { directoryAudit.initiatedBy = n.getObject(deserializeIntoAuditActivityInitiator) as any ; },
        "loggedByService": n => { directoryAudit.loggedByService = n.getStringValue() as any ; },
        "operationType": n => { directoryAudit.operationType = n.getStringValue() as any ; },
        "result": n => { directoryAudit.result = n.getEnumValue<OperationResult>(OperationResult) as any ; },
        "resultReason": n => { directoryAudit.resultReason = n.getStringValue() as any ; },
        "targetResources": n => { directoryAudit.targetResources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetResource) as any ; },
    }
}
