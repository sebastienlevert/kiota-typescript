import {AccessReviewScope} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrincipalResourceMembershipsScope extends AccessReviewScope, Partial<Parsable> {
    /** Defines the scopes of the principals whose access to resources are reviewed in the access review. */
    principalScopes?: AccessReviewScope[];
    /** Defines the scopes of the resources for which access is reviewed. */
    resourceScopes?: AccessReviewScope[];
}
