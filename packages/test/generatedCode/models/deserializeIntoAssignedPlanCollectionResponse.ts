import {deserializeIntoAssignedPlan} from './deserializeIntoAssignedPlan';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AssignedPlanCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedPlanCollectionResponse(assignedPlanCollectionResponse: AssignedPlanCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignedPlanCollectionResponse),
        "value": n => { assignedPlanCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedPlan) as any ; },
    }
}
