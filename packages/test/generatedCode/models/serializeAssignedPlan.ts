import {AssignedPlan} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedPlan(writer: SerializationWriter, assignedPlan: AssignedPlan | undefined = {}) : void {
            writer.writeDateValue("assignedDateTime", assignedPlan.assignedDateTime);
            writer.writeStringValue("capabilityStatus", assignedPlan.capabilityStatus);
            writer.writeStringValue("service", assignedPlan.service);
            writer.writeStringValue("servicePlanId", assignedPlan.servicePlanId);
}
