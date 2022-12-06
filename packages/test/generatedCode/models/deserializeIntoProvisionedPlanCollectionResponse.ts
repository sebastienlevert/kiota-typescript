import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoProvisionedPlan} from './deserializeIntoProvisionedPlan';
import {ProvisionedPlanCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionedPlanCollectionResponse(provisionedPlanCollectionResponse: ProvisionedPlanCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(provisionedPlanCollectionResponse),
        "value": n => { provisionedPlanCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisionedPlan) as any ; },
    }
}
