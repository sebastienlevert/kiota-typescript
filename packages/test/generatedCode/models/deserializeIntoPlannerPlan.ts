import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoPlannerBucket} from './deserializeIntoPlannerBucket';
import {deserializeIntoPlannerDelta} from './deserializeIntoPlannerDelta';
import {deserializeIntoPlannerPlanContainer} from './deserializeIntoPlannerPlanContainer';
import {deserializeIntoPlannerPlanContextCollection} from './deserializeIntoPlannerPlanContextCollection';
import {deserializeIntoPlannerPlanCreation} from './deserializeIntoPlannerPlanCreation';
import {deserializeIntoPlannerPlanDetails} from './deserializeIntoPlannerPlanDetails';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {PlannerPlan} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlan(plannerPlan: PlannerPlan | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlannerDelta(plannerPlan),
        "buckets": n => { plannerPlan.buckets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerBucket) as any ; },
        "container": n => { plannerPlan.container = n.getObject(deserializeIntoPlannerPlanContainer) as any ; },
        "contexts": n => { plannerPlan.contexts = n.getObject(deserializeIntoPlannerPlanContextCollection) as any ; },
        "createdBy": n => { plannerPlan.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { plannerPlan.createdDateTime = n.getDateValue() as any ; },
        "creationSource": n => { plannerPlan.creationSource = n.getObject(deserializeIntoPlannerPlanCreation) as any ; },
        "details": n => { plannerPlan.details = n.getObject(deserializeIntoPlannerPlanDetails) as any ; },
        "owner": n => { plannerPlan.owner = n.getStringValue() as any ; },
        "tasks": n => { plannerPlan.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerTask) as any ; },
        "title": n => { plannerPlan.title = n.getStringValue() as any ; },
    }
}
