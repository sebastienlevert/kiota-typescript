import {ApprovalStage} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApprovalStage(writer: SerializationWriter, approvalStage: ApprovalStage | undefined = {}) : void {
        serializeEntity(writer, approvalStage)
            writer.writeBooleanValue("assignedToMe", approvalStage.assignedToMe);
            writer.writeStringValue("displayName", approvalStage.displayName);
            writer.writeStringValue("justification", approvalStage.justification);
            writer.writeObjectValueFromMethod("reviewedBy", approvalStage.reviewedBy as any, serializeIdentity);
            writer.writeDateValue("reviewedDateTime", approvalStage.reviewedDateTime);
            writer.writeStringValue("reviewResult", approvalStage.reviewResult);
            writer.writeStringValue("status", approvalStage.status);
}
