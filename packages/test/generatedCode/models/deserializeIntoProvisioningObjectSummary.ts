import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoInitiator} from './deserializeIntoInitiator';
import {deserializeIntoModifiedProperty} from './deserializeIntoModifiedProperty';
import {deserializeIntoProvisionedIdentity} from './deserializeIntoProvisionedIdentity';
import {deserializeIntoProvisioningServicePrincipal} from './deserializeIntoProvisioningServicePrincipal';
import {deserializeIntoProvisioningStatusInfo} from './deserializeIntoProvisioningStatusInfo';
import {deserializeIntoProvisioningStep} from './deserializeIntoProvisioningStep';
import {deserializeIntoProvisioningSystem} from './deserializeIntoProvisioningSystem';
import {ProvisioningObjectSummary} from './index';
import {ProvisioningAction} from './provisioningAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningObjectSummary(provisioningObjectSummary: ProvisioningObjectSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(provisioningObjectSummary),
        "activityDateTime": n => { provisioningObjectSummary.activityDateTime = n.getDateValue() as any ; },
        "changeId": n => { provisioningObjectSummary.changeId = n.getStringValue() as any ; },
        "cycleId": n => { provisioningObjectSummary.cycleId = n.getStringValue() as any ; },
        "durationInMilliseconds": n => { provisioningObjectSummary.durationInMilliseconds = n.getNumberValue() as any ; },
        "initiatedBy": n => { provisioningObjectSummary.initiatedBy = n.getObject(deserializeIntoInitiator) as any ; },
        "jobId": n => { provisioningObjectSummary.jobId = n.getStringValue() as any ; },
        "modifiedProperties": n => { provisioningObjectSummary.modifiedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoModifiedProperty) as any ; },
        "provisioningAction": n => { provisioningObjectSummary.provisioningAction = n.getEnumValue<ProvisioningAction>(ProvisioningAction) as any ; },
        "provisioningStatusInfo": n => { provisioningObjectSummary.provisioningStatusInfo = n.getObject(deserializeIntoProvisioningStatusInfo) as any ; },
        "provisioningSteps": n => { provisioningObjectSummary.provisioningSteps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisioningStep) as any ; },
        "servicePrincipal": n => { provisioningObjectSummary.servicePrincipal = n.getObject(deserializeIntoProvisioningServicePrincipal) as any ; },
        "sourceIdentity": n => { provisioningObjectSummary.sourceIdentity = n.getObject(deserializeIntoProvisionedIdentity) as any ; },
        "sourceSystem": n => { provisioningObjectSummary.sourceSystem = n.getObject(deserializeIntoProvisioningSystem) as any ; },
        "targetIdentity": n => { provisioningObjectSummary.targetIdentity = n.getObject(deserializeIntoProvisionedIdentity) as any ; },
        "targetSystem": n => { provisioningObjectSummary.targetSystem = n.getObject(deserializeIntoProvisioningSystem) as any ; },
        "tenantId": n => { provisioningObjectSummary.tenantId = n.getStringValue() as any ; },
    }
}
