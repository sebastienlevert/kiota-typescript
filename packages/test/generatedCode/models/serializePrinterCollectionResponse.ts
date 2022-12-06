import {PrinterCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrinter} from './serializePrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterCollectionResponse(writer: SerializationWriter, printerCollectionResponse: PrinterCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printerCollectionResponse.value as any, serializePrinter);
}
