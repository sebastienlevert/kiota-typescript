import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintUsageByPrinter} from './deserializeIntoPrintUsageByPrinter';
import {PrintUsageByPrinterCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByPrinterCollectionResponse(printUsageByPrinterCollectionResponse: PrintUsageByPrinterCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printUsageByPrinterCollectionResponse),
        "value": n => { printUsageByPrinterCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintUsageByPrinter) as any ; },
    }
}
