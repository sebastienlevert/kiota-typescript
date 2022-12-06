import {ActivityHistoryItemCollectionResponse} from './index';
import {serializeActivityHistoryItem} from './serializeActivityHistoryItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityHistoryItemCollectionResponse(writer: SerializationWriter, activityHistoryItemCollectionResponse: ActivityHistoryItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, activityHistoryItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", activityHistoryItemCollectionResponse.value as any, serializeActivityHistoryItem);
}
