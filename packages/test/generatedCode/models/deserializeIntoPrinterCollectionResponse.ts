import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrinter} from './deserializeIntoPrinter';
import {PrinterCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCollectionResponse(printerCollectionResponse: PrinterCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printerCollectionResponse),
        "value": n => { printerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrinter) as any ; },
    }
}
