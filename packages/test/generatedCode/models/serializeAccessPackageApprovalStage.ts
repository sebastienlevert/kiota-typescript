import {AccessPackageApprovalStage} from './index';
import {serializeSubjectSet} from './serializeSubjectSet';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageApprovalStage(writer: SerializationWriter, accessPackageApprovalStage: AccessPackageApprovalStage | undefined = {}) : void {
            writer.writeDurationValue("durationBeforeAutomaticDenial", accessPackageApprovalStage.durationBeforeAutomaticDenial);
            writer.writeDurationValue("durationBeforeEscalation", accessPackageApprovalStage.durationBeforeEscalation);
            writer.writeCollectionOfObjectValuesFromMethod("escalationApprovers", accessPackageApprovalStage.escalationApprovers as any, serializeSubjectSet);
            writer.writeCollectionOfObjectValuesFromMethod("fallbackEscalationApprovers", accessPackageApprovalStage.fallbackEscalationApprovers as any, serializeSubjectSet);
            writer.writeCollectionOfObjectValuesFromMethod("fallbackPrimaryApprovers", accessPackageApprovalStage.fallbackPrimaryApprovers as any, serializeSubjectSet);
            writer.writeBooleanValue("isApproverJustificationRequired", accessPackageApprovalStage.isApproverJustificationRequired);
            writer.writeBooleanValue("isEscalationEnabled", accessPackageApprovalStage.isEscalationEnabled);
            writer.writeStringValue("@odata.type", accessPackageApprovalStage.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("primaryApprovers", accessPackageApprovalStage.primaryApprovers as any, serializeSubjectSet);
}
