import {AlertHistoryStateCollectionResponse} from './index';
import {serializeAlertHistoryState} from './serializeAlertHistoryState';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertHistoryStateCollectionResponse(writer: SerializationWriter, alertHistoryStateCollectionResponse: AlertHistoryStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alertHistoryStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", alertHistoryStateCollectionResponse.value as any, serializeAlertHistoryState);
}
