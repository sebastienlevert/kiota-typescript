import {ApprovalStep} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalStep(writer: SerializationWriter, approvalStep: ApprovalStep | undefined = {}) : void {
        serializeEntity(writer, approvalStep)
            writer.writeBooleanValue("assignedToMe", approvalStep.assignedToMe);
            writer.writeStringValue("displayName", approvalStep.displayName);
            writer.writeStringValue("justification", approvalStep.justification);
            writer.writeObjectValueFromMethod("reviewedBy", approvalStep.reviewedBy as any, serializeIdentity);
            writer.writeDateValue("reviewedDateTime", approvalStep.reviewedDateTime);
            writer.writeStringValue("reviewResult", approvalStep.reviewResult);
            writer.writeStringValue("status", approvalStep.status);
}
