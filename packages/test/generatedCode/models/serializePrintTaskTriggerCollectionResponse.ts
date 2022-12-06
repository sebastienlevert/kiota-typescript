import {PrintTaskTriggerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintTaskTrigger} from './serializePrintTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskTriggerCollectionResponse(writer: SerializationWriter, printTaskTriggerCollectionResponse: PrintTaskTriggerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printTaskTriggerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printTaskTriggerCollectionResponse.value as any, serializePrintTaskTrigger);
}
