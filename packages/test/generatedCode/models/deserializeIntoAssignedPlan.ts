import {AssignedPlan} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedPlan(assignedPlan: AssignedPlan | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedDateTime": n => { assignedPlan.assignedDateTime = n.getDateValue() as any ; },
        "capabilityStatus": n => { assignedPlan.capabilityStatus = n.getStringValue() as any ; },
        "service": n => { assignedPlan.service = n.getStringValue() as any ; },
        "servicePlanId": n => { assignedPlan.servicePlanId = n.getStringValue() as any ; },
    }
}
