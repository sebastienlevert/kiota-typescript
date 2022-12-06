import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './index';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource(writer: SerializationWriter, accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource: AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource | undefined = {}) : void {
        serializeAccessReviewInstanceDecisionItemResource(writer, accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource)
            writer.writeStringValue("accessPackageDisplayName", accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageDisplayName);
            writer.writeStringValue("accessPackageId", accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageId);
}
