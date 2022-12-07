import {deserializeIntoPlannerDelta} from './deserializeIntoPlannerDelta';
import {deserializeIntoPlannerFavoritePlanReferenceCollection} from './deserializeIntoPlannerFavoritePlanReferenceCollection';
import {deserializeIntoPlannerPlan} from './deserializeIntoPlannerPlan';
import {deserializeIntoPlannerRecentPlanReferenceCollection} from './deserializeIntoPlannerRecentPlanReferenceCollection';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {PlannerUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerUser(plannerUser: PlannerUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlannerDelta(plannerUser),
        "all": n => { plannerUser.all = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerDelta) as any ; },
        "favoritePlanReferences": n => { plannerUser.favoritePlanReferences = n.getObject(deserializeIntoPlannerFavoritePlanReferenceCollection) as any ; },
        "favoritePlans": n => { plannerUser.favoritePlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
        "plans": n => { plannerUser.plans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
        "recentPlanReferences": n => { plannerUser.recentPlanReferences = n.getObject(deserializeIntoPlannerRecentPlanReferenceCollection) as any ; },
        "recentPlans": n => { plannerUser.recentPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
        "rosterPlans": n => { plannerUser.rosterPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
        "tasks": n => { plannerUser.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerTask) as any ; },
    }
}
