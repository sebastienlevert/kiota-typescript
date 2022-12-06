import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPlannerCategoryDescriptions} from './deserializeIntoPlannerCategoryDescriptions';
import {deserializeIntoPlannerUserIds} from './deserializeIntoPlannerUserIds';
import {PlannerPlanDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanDetails(plannerPlanDetails: PlannerPlanDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerPlanDetails),
        "categoryDescriptions": n => { plannerPlanDetails.categoryDescriptions = n.getObject(deserializeIntoPlannerCategoryDescriptions) as any ; },
        "sharedWith": n => { plannerPlanDetails.sharedWith = n.getObject(deserializeIntoPlannerUserIds) as any ; },
    }
}
