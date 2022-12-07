import {IdentitySet, PlannerBucket, PlannerDelta, PlannerPlanContainer, PlannerPlanContextCollection, PlannerPlanCreation, PlannerPlanDetails, PlannerTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlan extends Partial<Parsable>, PlannerDelta {
    /** Collection of buckets in the plan. Read-only. Nullable. */
    buckets?: PlannerBucket[];
    /** The container property */
    container?: PlannerPlanContainer;
    /** The contexts property */
    contexts?: PlannerPlanContextCollection;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** The creationSource property */
    creationSource?: PlannerPlanCreation;
    /** The details property */
    details?: PlannerPlanDetails;
    /** The owner property */
    owner?: string;
    /** Collection of tasks in the plan. Read-only. Nullable. */
    tasks?: PlannerTask[];
    /** Required. Title of the plan. */
    title?: string;
}
