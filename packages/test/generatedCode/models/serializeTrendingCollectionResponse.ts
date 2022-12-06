import {TrendingCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTrending} from './serializeTrending';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrendingCollectionResponse(writer: SerializationWriter, trendingCollectionResponse: TrendingCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, trendingCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", trendingCollectionResponse.value as any, serializeTrending);
}
