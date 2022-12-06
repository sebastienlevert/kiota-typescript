import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRecommendedAction} from './deserializeIntoRecommendedAction';
import {RecommendedActionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecommendedActionCollectionResponse(recommendedActionCollectionResponse: RecommendedActionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(recommendedActionCollectionResponse),
        "value": n => { recommendedActionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecommendedAction) as any ; },
    }
}
