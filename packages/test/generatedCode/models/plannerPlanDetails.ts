import {Entity, PlannerCategoryDescriptions, PlannerUserIds} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanDetails extends Entity, Partial<Parsable> {
    /** An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan. */
    categoryDescriptions?: PlannerCategoryDescriptions;
    /** Set of user IDs that this plan is shared with. If you are leveraging Microsoft 365 groups, use the Groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection, although it is not required for them to access the plan owned by the group. */
    sharedWith?: PlannerUserIds;
}
