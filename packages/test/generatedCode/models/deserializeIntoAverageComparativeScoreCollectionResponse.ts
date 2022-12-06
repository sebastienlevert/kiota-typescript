import {deserializeIntoAverageComparativeScore} from './deserializeIntoAverageComparativeScore';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AverageComparativeScoreCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageComparativeScoreCollectionResponse(averageComparativeScoreCollectionResponse: AverageComparativeScoreCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(averageComparativeScoreCollectionResponse),
        "value": n => { averageComparativeScoreCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAverageComparativeScore) as any ; },
    }
}
