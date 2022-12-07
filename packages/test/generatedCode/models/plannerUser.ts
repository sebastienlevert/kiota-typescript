import {PlannerDelta, PlannerFavoritePlanReferenceCollection, PlannerPlan, PlannerRecentPlanReferenceCollection, PlannerTask} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerUser extends Partial<Parsable>, PlannerDelta {
    /** The all property */
    all?: PlannerDelta[];
    /** The favoritePlanReferences property */
    favoritePlanReferences?: PlannerFavoritePlanReferenceCollection;
    /** Read-only. Nullable. Returns the plannerPlans that the user marked as favorites. */
    favoritePlans?: PlannerPlan[];
    /** The plans property */
    plans?: PlannerPlan[];
    /** The recentPlanReferences property */
    recentPlanReferences?: PlannerRecentPlanReferenceCollection;
    /** Read-only. Nullable. Returns the plannerPlans that have been recently viewed by the user in apps that support recent plans. */
    recentPlans?: PlannerPlan[];
    /** Read-only. Nullable. Returns the plannerPlans contained by the plannerRosters the user is a member. */
    rosterPlans?: PlannerPlan[];
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user. */
    tasks?: PlannerTask[];
}
