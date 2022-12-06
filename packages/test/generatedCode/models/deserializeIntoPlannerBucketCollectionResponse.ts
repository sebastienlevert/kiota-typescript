import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPlannerBucket} from './deserializeIntoPlannerBucket';
import {PlannerBucketCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerBucketCollectionResponse(plannerBucketCollectionResponse: PlannerBucketCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(plannerBucketCollectionResponse),
        "value": n => { plannerBucketCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlannerBucket) as any ; },
    }
}
