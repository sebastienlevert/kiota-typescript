import {Entity, IdentitySet, PlannerBucket, PlannerPlanContainer, PlannerPlanDetails, PlannerTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlan extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. Collection of buckets in the plan. */
    buckets?: PlannerBucket[];
    /** Identifies the container of the plan. After it is set, this property can’t be updated. Required. */
    container?: PlannerPlanContainer;
    /** Read-only. The user who created the plan. */
    createdBy?: IdentitySet;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** Read-only. Nullable. Additional details about the plan. */
    details?: PlannerPlanDetails;
    /** The owner property */
    owner?: string;
    /** Read-only. Nullable. Collection of tasks in the plan. */
    tasks?: PlannerTask[];
    /** Required. Title of the plan. */
    title?: string;
}
