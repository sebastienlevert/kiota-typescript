import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {AccessPackageApprovalStage} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageApprovalStage(accessPackageApprovalStage: AccessPackageApprovalStage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "durationBeforeAutomaticDenial": n => { accessPackageApprovalStage.durationBeforeAutomaticDenial = n.getDurationValue() as any ; },
        "durationBeforeEscalation": n => { accessPackageApprovalStage.durationBeforeEscalation = n.getDurationValue() as any ; },
        "escalationApprovers": n => { accessPackageApprovalStage.escalationApprovers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
        "fallbackEscalationApprovers": n => { accessPackageApprovalStage.fallbackEscalationApprovers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
        "fallbackPrimaryApprovers": n => { accessPackageApprovalStage.fallbackPrimaryApprovers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
        "isApproverJustificationRequired": n => { accessPackageApprovalStage.isApproverJustificationRequired = n.getBooleanValue() as any ; },
        "isEscalationEnabled": n => { accessPackageApprovalStage.isEscalationEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { accessPackageApprovalStage.odataType = n.getStringValue() as any ; },
        "primaryApprovers": n => { accessPackageApprovalStage.primaryApprovers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectSet) as any ; },
    }
}
