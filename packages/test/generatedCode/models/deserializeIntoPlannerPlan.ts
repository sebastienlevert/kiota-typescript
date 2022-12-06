import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoPlannerBucket} from './deserializeIntoPlannerBucket';
import {deserializeIntoPlannerPlanContainer} from './deserializeIntoPlannerPlanContainer';
import {deserializeIntoPlannerPlanDetails} from './deserializeIntoPlannerPlanDetails';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {PlannerPlan} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlan(plannerPlan: PlannerPlan | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerPlan),
        "buckets": n => { plannerPlan.buckets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerBucket) as any ; },
        "container": n => { plannerPlan.container = n.getObject(deserializeIntoPlannerPlanContainer) as any ; },
        "createdBy": n => { plannerPlan.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { plannerPlan.createdDateTime = n.getDateValue() as any ; },
        "details": n => { plannerPlan.details = n.getObject(deserializeIntoPlannerPlanDetails) as any ; },
        "owner": n => { plannerPlan.owner = n.getStringValue() as any ; },
        "tasks": n => { plannerPlan.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerTask) as any ; },
        "title": n => { plannerPlan.title = n.getStringValue() as any ; },
    }
}
