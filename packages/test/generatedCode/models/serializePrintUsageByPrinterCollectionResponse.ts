import {PrintUsageByPrinterCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintUsageByPrinter} from './serializePrintUsageByPrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsageByPrinterCollectionResponse(writer: SerializationWriter, printUsageByPrinterCollectionResponse: PrintUsageByPrinterCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printUsageByPrinterCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printUsageByPrinterCollectionResponse.value as any, serializePrintUsageByPrinter);
}
