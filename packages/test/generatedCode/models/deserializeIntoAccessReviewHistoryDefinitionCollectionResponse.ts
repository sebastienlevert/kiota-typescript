import {deserializeIntoAccessReviewHistoryDefinition} from './deserializeIntoAccessReviewHistoryDefinition';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewHistoryDefinitionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryDefinitionCollectionResponse(accessReviewHistoryDefinitionCollectionResponse: AccessReviewHistoryDefinitionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewHistoryDefinitionCollectionResponse),
        "value": n => { accessReviewHistoryDefinitionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewHistoryDefinition) as any ; },
    }
}
