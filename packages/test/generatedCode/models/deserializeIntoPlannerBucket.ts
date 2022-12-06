import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {PlannerBucket} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucket(plannerBucket: PlannerBucket | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerBucket),
        "name": n => { plannerBucket.name = n.getStringValue() as any ; },
        "orderHint": n => { plannerBucket.orderHint = n.getStringValue() as any ; },
        "planId": n => { plannerBucket.planId = n.getStringValue() as any ; },
        "tasks": n => { plannerBucket.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerTask) as any ; },
    }
}
