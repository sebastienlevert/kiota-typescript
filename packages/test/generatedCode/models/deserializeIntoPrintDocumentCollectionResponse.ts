import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintDocument} from './deserializeIntoPrintDocument';
import {PrintDocumentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintDocumentCollectionResponse(printDocumentCollectionResponse: PrintDocumentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printDocumentCollectionResponse),
        "value": n => { printDocumentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintDocument) as any ; },
    }
}
