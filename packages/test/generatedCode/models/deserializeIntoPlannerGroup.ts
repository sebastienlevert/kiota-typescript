import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPlannerPlan} from './deserializeIntoPlannerPlan';
import {PlannerGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerGroup(plannerGroup: PlannerGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerGroup),
        "plans": n => { plannerGroup.plans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
    }
}
