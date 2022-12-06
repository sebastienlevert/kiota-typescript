import {deserializeIntoAccessPackageApprovalStage} from './deserializeIntoAccessPackageApprovalStage';
import {AccessPackageAssignmentApprovalSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentApprovalSettings(accessPackageAssignmentApprovalSettings: AccessPackageAssignmentApprovalSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isApprovalRequiredForAdd": n => { accessPackageAssignmentApprovalSettings.isApprovalRequiredForAdd = n.getBooleanValue() as any ; },
        "isApprovalRequiredForUpdate": n => { accessPackageAssignmentApprovalSettings.isApprovalRequiredForUpdate = n.getBooleanValue() as any ; },
        "@odata.type": n => { accessPackageAssignmentApprovalSettings.odataType = n.getStringValue() as any ; },
        "stages": n => { accessPackageAssignmentApprovalSettings.stages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageApprovalStage) as any ; },
    }
}
