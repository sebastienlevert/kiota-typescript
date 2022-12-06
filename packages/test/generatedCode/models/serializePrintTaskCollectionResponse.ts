import {PrintTaskCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintTask} from './serializePrintTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskCollectionResponse(writer: SerializationWriter, printTaskCollectionResponse: PrintTaskCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printTaskCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printTaskCollectionResponse.value as any, serializePrintTask);
}
