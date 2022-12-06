import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintJob} from './deserializeIntoPrintJob';
import {PrintJobCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJobCollectionResponse(printJobCollectionResponse: PrintJobCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printJobCollectionResponse),
        "value": n => { printJobCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintJob) as any ; },
    }
}
