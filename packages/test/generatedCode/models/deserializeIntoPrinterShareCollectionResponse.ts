import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrinterShare} from './deserializeIntoPrinterShare';
import {PrinterShareCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShareCollectionResponse(printerShareCollectionResponse: PrinterShareCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printerShareCollectionResponse),
        "value": n => { printerShareCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrinterShare) as any ; },
    }
}
