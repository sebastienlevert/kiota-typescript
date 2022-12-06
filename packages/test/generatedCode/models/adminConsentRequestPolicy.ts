import {AccessReviewReviewerScope, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AdminConsentRequestPolicy extends Entity, Partial<Parsable> {
    /** Specifies whether the admin consent request feature is enabled or disabled. Required. */
    isEnabled?: boolean;
    /** Specifies whether reviewers will receive notifications. Required. */
    notifyReviewers?: boolean;
    /** Specifies whether reviewers will receive reminder emails. Required. */
    remindersEnabled?: boolean;
    /** Specifies the duration the request is active before it automatically expires if no decision is applied. */
    requestDurationInDays?: number;
    /** The list of reviewers for the admin consent. Required. */
    reviewers?: AccessReviewReviewerScope[];
    /** Specifies the version of this policy. When the policy is updated, this version is updated. Read-only. */
    version?: number;
}
