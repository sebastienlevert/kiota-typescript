import {PrinterCreateOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrinterCreateOperation} from './serializePrinterCreateOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterCreateOperationCollectionResponse(writer: SerializationWriter, printerCreateOperationCollectionResponse: PrinterCreateOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printerCreateOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printerCreateOperationCollectionResponse.value as any, serializePrinterCreateOperation);
}
