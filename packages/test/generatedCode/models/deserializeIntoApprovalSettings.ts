import {deserializeIntoUnifiedApprovalStage} from './deserializeIntoUnifiedApprovalStage';
import {ApprovalSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApprovalSettings(approvalSettings: ApprovalSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "approvalMode": n => { approvalSettings.approvalMode = n.getStringValue() as any ; },
        "approvalStages": n => { approvalSettings.approvalStages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedApprovalStage) as any ; },
        "isApprovalRequired": n => { approvalSettings.isApprovalRequired = n.getBooleanValue() as any ; },
        "isApprovalRequiredForExtension": n => { approvalSettings.isApprovalRequiredForExtension = n.getBooleanValue() as any ; },
        "isRequestorJustificationRequired": n => { approvalSettings.isRequestorJustificationRequired = n.getBooleanValue() as any ; },
        "@odata.type": n => { approvalSettings.odataType = n.getStringValue() as any ; },
    }
}
