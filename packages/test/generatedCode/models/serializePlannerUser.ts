import {PlannerUser} from './index';
import {serializePlannerDelta} from './serializePlannerDelta';
import {serializePlannerFavoritePlanReferenceCollection} from './serializePlannerFavoritePlanReferenceCollection';
import {serializePlannerPlan} from './serializePlannerPlan';
import {serializePlannerRecentPlanReferenceCollection} from './serializePlannerRecentPlanReferenceCollection';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerUser(writer: SerializationWriter, plannerUser: PlannerUser | undefined = {}) : void {
        serializePlannerDelta(writer, plannerUser)
            writer.writeCollectionOfObjectValuesFromMethod("all", plannerUser.all as any, serializePlannerDelta);
            writer.writeObjectValueFromMethod("favoritePlanReferences", plannerUser.favoritePlanReferences as any, serializePlannerFavoritePlanReferenceCollection);
            writer.writeCollectionOfObjectValuesFromMethod("favoritePlans", plannerUser.favoritePlans as any, serializePlannerPlan);
            writer.writeCollectionOfObjectValuesFromMethod("plans", plannerUser.plans as any, serializePlannerPlan);
            writer.writeObjectValueFromMethod("recentPlanReferences", plannerUser.recentPlanReferences as any, serializePlannerRecentPlanReferenceCollection);
            writer.writeCollectionOfObjectValuesFromMethod("recentPlans", plannerUser.recentPlans as any, serializePlannerPlan);
            writer.writeCollectionOfObjectValuesFromMethod("rosterPlans", plannerUser.rosterPlans as any, serializePlannerPlan);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", plannerUser.tasks as any, serializePlannerTask);
}
