import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTrending} from './deserializeIntoTrending';
import {TrendingCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTrendingCollectionResponse(trendingCollectionResponse: TrendingCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(trendingCollectionResponse),
        "value": n => { trendingCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTrending) as any ; },
    }
}
