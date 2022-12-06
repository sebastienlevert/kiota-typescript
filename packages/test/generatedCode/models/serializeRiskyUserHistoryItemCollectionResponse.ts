import {RiskyUserHistoryItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskyUserHistoryItem} from './serializeRiskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyUserHistoryItemCollectionResponse(writer: SerializationWriter, riskyUserHistoryItemCollectionResponse: RiskyUserHistoryItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyUserHistoryItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", riskyUserHistoryItemCollectionResponse.value as any, serializeRiskyUserHistoryItem);
}
