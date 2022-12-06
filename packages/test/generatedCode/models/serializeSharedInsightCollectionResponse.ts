import {SharedInsightCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedInsight} from './serializeSharedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedInsightCollectionResponse(writer: SerializationWriter, sharedInsightCollectionResponse: SharedInsightCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedInsightCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sharedInsightCollectionResponse.value as any, serializeSharedInsight);
}
