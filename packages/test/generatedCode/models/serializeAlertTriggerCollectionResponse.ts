import {AlertTriggerCollectionResponse} from './index';
import {serializeAlertTrigger} from './serializeAlertTrigger';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertTriggerCollectionResponse(writer: SerializationWriter, alertTriggerCollectionResponse: AlertTriggerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alertTriggerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", alertTriggerCollectionResponse.value as any, serializeAlertTrigger);
}
