import {Entity, PlannerBucket, PlannerPlan, PlannerTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Planner extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. Returns a collection of the specified buckets */
    buckets?: PlannerBucket[];
    /** Read-only. Nullable. Returns a collection of the specified plans */
    plans?: PlannerPlan[];
    /** Read-only. Nullable. Returns a collection of the specified tasks */
    tasks?: PlannerTask[];
}
