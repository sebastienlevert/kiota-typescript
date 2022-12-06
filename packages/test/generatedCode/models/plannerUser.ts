import {Entity, PlannerPlan, PlannerTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerUser extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    plans?: PlannerPlan[];
    /** Read-only. Nullable. Returns the plannerPlans shared with the user. */
    tasks?: PlannerTask[];
}
