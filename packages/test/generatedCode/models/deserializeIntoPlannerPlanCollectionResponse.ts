import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPlannerPlan} from './deserializeIntoPlannerPlan';
import {PlannerPlanCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerPlanCollectionResponse(plannerPlanCollectionResponse: PlannerPlanCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(plannerPlanCollectionResponse),
        "value": n => { plannerPlanCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerPlan) as any ; },
    }
}
