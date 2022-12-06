import {AccessReviewInstanceDecisionItemResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource extends AccessReviewInstanceDecisionItemResource, Partial<Parsable> {
    /** Display name of the access package to which access has been granted. */
    accessPackageDisplayName?: string;
    /** Identifier of the access package to which access has been granted. */
    accessPackageId?: string;
}
