import {deserializeIntoPlannerCategoryDescriptions} from './deserializeIntoPlannerCategoryDescriptions';
import {deserializeIntoPlannerDelta} from './deserializeIntoPlannerDelta';
import {deserializeIntoPlannerPlanContextDetailsCollection} from './deserializeIntoPlannerPlanContextDetailsCollection';
import {deserializeIntoPlannerUserIds} from './deserializeIntoPlannerUserIds';
import {PlannerPlanDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanDetails(plannerPlanDetails: PlannerPlanDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlannerDelta(plannerPlanDetails),
        "categoryDescriptions": n => { plannerPlanDetails.categoryDescriptions = n.getObject(deserializeIntoPlannerCategoryDescriptions) as any ; },
        "contextDetails": n => { plannerPlanDetails.contextDetails = n.getObject(deserializeIntoPlannerPlanContextDetailsCollection) as any ; },
        "sharedWith": n => { plannerPlanDetails.sharedWith = n.getObject(deserializeIntoPlannerUserIds) as any ; },
    }
}
