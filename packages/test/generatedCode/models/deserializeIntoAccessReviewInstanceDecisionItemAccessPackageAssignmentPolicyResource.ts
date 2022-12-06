import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource: AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource),
        "accessPackageDisplayName": n => { accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageDisplayName = n.getStringValue() as any ; },
        "accessPackageId": n => { accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageId = n.getStringValue() as any ; },
    }
}
