import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrinterCreateOperation} from './deserializeIntoPrinterCreateOperation';
import {PrinterCreateOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCreateOperationCollectionResponse(printerCreateOperationCollectionResponse: PrinterCreateOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printerCreateOperationCollectionResponse),
        "value": n => { printerCreateOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrinterCreateOperation) as any ; },
    }
}
