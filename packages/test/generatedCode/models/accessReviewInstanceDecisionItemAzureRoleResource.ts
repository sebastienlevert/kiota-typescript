import {AccessReviewInstanceDecisionItemResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemAzureRoleResource extends AccessReviewInstanceDecisionItemResource, Partial<Parsable> {
    /** Details of the scope this role is associated with. */
    scope?: AccessReviewInstanceDecisionItemResource;
}
