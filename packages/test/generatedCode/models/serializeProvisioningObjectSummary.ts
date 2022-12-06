import {ProvisioningObjectSummary} from './index';
import {ProvisioningAction} from './provisioningAction';
import {serializeEntity} from './serializeEntity';
import {serializeInitiator} from './serializeInitiator';
import {serializeModifiedProperty} from './serializeModifiedProperty';
import {serializeProvisionedIdentity} from './serializeProvisionedIdentity';
import {serializeProvisioningServicePrincipal} from './serializeProvisioningServicePrincipal';
import {serializeProvisioningStatusInfo} from './serializeProvisioningStatusInfo';
import {serializeProvisioningStep} from './serializeProvisioningStep';
import {serializeProvisioningSystem} from './serializeProvisioningSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningObjectSummary(writer: SerializationWriter, provisioningObjectSummary: ProvisioningObjectSummary | undefined = {}) : void {
        serializeEntity(writer, provisioningObjectSummary)
            writer.writeDateValue("activityDateTime", provisioningObjectSummary.activityDateTime);
            writer.writeStringValue("changeId", provisioningObjectSummary.changeId);
            writer.writeStringValue("cycleId", provisioningObjectSummary.cycleId);
            writer.writeNumberValue("durationInMilliseconds", provisioningObjectSummary.durationInMilliseconds);
            writer.writeObjectValueFromMethod("initiatedBy", provisioningObjectSummary.initiatedBy as any, serializeInitiator);
            writer.writeStringValue("jobId", provisioningObjectSummary.jobId);
            writer.writeCollectionOfObjectValuesFromMethod("modifiedProperties", provisioningObjectSummary.modifiedProperties as any, serializeModifiedProperty);
            writer.writeEnumValue<ProvisioningAction>("provisioningAction", provisioningObjectSummary.provisioningAction);
            writer.writeObjectValueFromMethod("provisioningStatusInfo", provisioningObjectSummary.provisioningStatusInfo as any, serializeProvisioningStatusInfo);
            writer.writeCollectionOfObjectValuesFromMethod("provisioningSteps", provisioningObjectSummary.provisioningSteps as any, serializeProvisioningStep);
            writer.writeObjectValueFromMethod("servicePrincipal", provisioningObjectSummary.servicePrincipal as any, serializeProvisioningServicePrincipal);
            writer.writeObjectValueFromMethod("sourceIdentity", provisioningObjectSummary.sourceIdentity as any, serializeProvisionedIdentity);
            writer.writeObjectValueFromMethod("sourceSystem", provisioningObjectSummary.sourceSystem as any, serializeProvisioningSystem);
            writer.writeObjectValueFromMethod("targetIdentity", provisioningObjectSummary.targetIdentity as any, serializeProvisionedIdentity);
            writer.writeObjectValueFromMethod("targetSystem", provisioningObjectSummary.targetSystem as any, serializeProvisioningSystem);
            writer.writeStringValue("tenantId", provisioningObjectSummary.tenantId);
}
