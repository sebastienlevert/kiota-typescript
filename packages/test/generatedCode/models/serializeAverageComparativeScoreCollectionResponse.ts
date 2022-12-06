import {AverageComparativeScoreCollectionResponse} from './index';
import {serializeAverageComparativeScore} from './serializeAverageComparativeScore';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAverageComparativeScoreCollectionResponse(writer: SerializationWriter, averageComparativeScoreCollectionResponse: AverageComparativeScoreCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, averageComparativeScoreCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", averageComparativeScoreCollectionResponse.value as any, serializeAverageComparativeScore);
}
