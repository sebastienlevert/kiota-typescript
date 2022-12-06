import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPlannerPlan} from './deserializeIntoPlannerPlan';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {PlannerUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerUser(plannerUser: PlannerUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerUser),
        "plans": n => { plannerUser.plans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
        "tasks": n => { plannerUser.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerTask) as any ; },
    }
}
