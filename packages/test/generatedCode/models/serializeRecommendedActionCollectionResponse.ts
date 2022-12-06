import {RecommendedActionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRecommendedAction} from './serializeRecommendedAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecommendedActionCollectionResponse(writer: SerializationWriter, recommendedActionCollectionResponse: RecommendedActionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, recommendedActionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", recommendedActionCollectionResponse.value as any, serializeRecommendedAction);
}
