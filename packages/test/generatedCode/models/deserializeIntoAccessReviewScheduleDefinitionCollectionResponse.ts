import {deserializeIntoAccessReviewScheduleDefinition} from './deserializeIntoAccessReviewScheduleDefinition';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewScheduleDefinitionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScheduleDefinitionCollectionResponse(accessReviewScheduleDefinitionCollectionResponse: AccessReviewScheduleDefinitionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewScheduleDefinitionCollectionResponse),
        "value": n => { accessReviewScheduleDefinitionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewScheduleDefinition) as any ; },
    }
}
