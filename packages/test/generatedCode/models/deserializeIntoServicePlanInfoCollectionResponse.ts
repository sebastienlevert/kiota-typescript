import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoServicePlanInfo} from './deserializeIntoServicePlanInfo';
import {ServicePlanInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePlanInfoCollectionResponse(servicePlanInfoCollectionResponse: ServicePlanInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(servicePlanInfoCollectionResponse),
        "value": n => { servicePlanInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServicePlanInfo) as any ; },
    }
}
