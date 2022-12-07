import {Entity, PlannerPlan} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerGroup extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. Returns the plannerPlans owned by the group. */
    plans?: PlannerPlan[];
}
