import {AccessReviewInstance, AccessReviewInstanceDecisionItemResource, AccessReviewInstanceDecisionItemTarget, DecisionItemPrincipalResourceMembership, Entity, GovernanceInsight, Identity, UserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItem extends Entity, Partial<Parsable> {
    /** The identifier of the accessReviewInstance parent. Supports $select. Read-only. */
    accessReviewId?: string;
    /** The appliedBy property */
    appliedBy?: UserIdentity;
    /** The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Supports $select. Read-only. */
    appliedDateTime?: Date;
    /** The result of applying the decision. Possible values: New, AppliedSuccessfully, AppliedWithUnknownFailure, AppliedSuccessfullyButObjectNotFound and ApplyNotSupported. Supports $select, $orderby, and $filter (eq only). Read-only. */
    applyResult?: string;
    /** Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow. Supports $select, $orderby, and $filter (eq only). */
    decision?: string;
    /** Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem. */
    insights?: GovernanceInsight[];
    /** The instance property */
    instance?: AccessReviewInstance;
    /** Justification left by the reviewer when they made the decision. */
    justification?: string;
    /** The principal property */
    principal?: Identity;
    /** Link to the principal object. For example: https://graph.microsoft.com/v1.0/users/a6c7aecb-cbfd-4763-87ef-e91b4bd509d9. Read-only. */
    principalLink?: string;
    /** The principalResourceMembership property */
    principalResourceMembership?: DecisionItemPrincipalResourceMembership;
    /** A system-generated recommendation for the approval decision based off last interactive sign-in to tenant. Recommend approve if sign-in is within thirty days of start of review. Recommend deny if sign-in is greater than thirty days of start of review. Recommendation not available otherwise. Possible values: Approve, Deny, or NoInfoAvailable. Supports $select, $orderby, and $filter (eq only). Read-only. */
    recommendation?: string;
    /** The resource property */
    resource?: AccessReviewInstanceDecisionItemResource;
    /** A link to the resource. For example, https://graph.microsoft.com/v1.0/servicePrincipals/c86300f3-8695-4320-9f6e-32a2555f5ff8. Supports $select. Read-only. */
    resourceLink?: string;
    /** The reviewedBy property */
    reviewedBy?: UserIdentity;
    /** The timestamp when the review decision occurred. Supports $select. Read-only. */
    reviewedDateTime?: Date;
    /** The target property */
    target?: AccessReviewInstanceDecisionItemTarget;
}
