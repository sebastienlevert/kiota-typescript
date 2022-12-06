import {PrintOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintOperation} from './serializePrintOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintOperationCollectionResponse(writer: SerializationWriter, printOperationCollectionResponse: PrintOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printOperationCollectionResponse.value as any, serializePrintOperation);
}
