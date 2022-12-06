import {PrinterShareCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrinterShare} from './serializePrinterShare';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterShareCollectionResponse(writer: SerializationWriter, printerShareCollectionResponse: PrinterShareCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printerShareCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printerShareCollectionResponse.value as any, serializePrinterShare);
}
