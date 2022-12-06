import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPlannerTask} from './deserializeIntoPlannerTask';
import {PlannerTaskCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTaskCollectionResponse(plannerTaskCollectionResponse: PlannerTaskCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(plannerTaskCollectionResponse),
        "value": n => { plannerTaskCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerTask) as any ; },
    }
}
