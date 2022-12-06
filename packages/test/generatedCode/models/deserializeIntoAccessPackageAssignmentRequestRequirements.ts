import {deserializeIntoEntitlementManagementSchedule} from './deserializeIntoEntitlementManagementSchedule';
import {AccessPackageAssignmentRequestRequirements} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequestRequirements(accessPackageAssignmentRequestRequirements: AccessPackageAssignmentRequestRequirements | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCustomAssignmentSchedule": n => { accessPackageAssignmentRequestRequirements.allowCustomAssignmentSchedule = n.getBooleanValue() as any ; },
        "isApprovalRequiredForAdd": n => { accessPackageAssignmentRequestRequirements.isApprovalRequiredForAdd = n.getBooleanValue() as any ; },
        "isApprovalRequiredForUpdate": n => { accessPackageAssignmentRequestRequirements.isApprovalRequiredForUpdate = n.getBooleanValue() as any ; },
        "@odata.type": n => { accessPackageAssignmentRequestRequirements.odataType = n.getStringValue() as any ; },
        "policyDescription": n => { accessPackageAssignmentRequestRequirements.policyDescription = n.getStringValue() as any ; },
        "policyDisplayName": n => { accessPackageAssignmentRequestRequirements.policyDisplayName = n.getStringValue() as any ; },
        "policyId": n => { accessPackageAssignmentRequestRequirements.policyId = n.getStringValue() as any ; },
        "schedule": n => { accessPackageAssignmentRequestRequirements.schedule = n.getObject(deserializeIntoEntitlementManagementSchedule) as any ; },
    }
}
