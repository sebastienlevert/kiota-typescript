import {AccessReviewInstanceDecisionItemTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewInstanceDecisionItemTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewInstanceDecisionItemTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewInstanceDecisionItemTarget();
}
