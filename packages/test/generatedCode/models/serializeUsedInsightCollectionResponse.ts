import {UsedInsightCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUsedInsight} from './serializeUsedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsedInsightCollectionResponse(writer: SerializationWriter, usedInsightCollectionResponse: UsedInsightCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, usedInsightCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", usedInsightCollectionResponse.value as any, serializeUsedInsight);
}
