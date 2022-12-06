import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPlannerBucket} from './deserializeIntoPlannerBucket';
import {deserializeIntoPlannerPlan} from './deserializeIntoPlannerPlan';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {Planner} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlanner(planner: Planner | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(planner),
        "buckets": n => { planner.buckets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerBucket) as any ; },
        "plans": n => { planner.plans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
        "tasks": n => { planner.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerTask) as any ; },
    }
}
