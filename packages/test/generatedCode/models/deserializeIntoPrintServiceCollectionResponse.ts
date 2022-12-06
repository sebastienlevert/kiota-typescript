import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintService} from './deserializeIntoPrintService';
import {PrintServiceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintServiceCollectionResponse(printServiceCollectionResponse: PrintServiceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printServiceCollectionResponse),
        "value": n => { printServiceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintService) as any ; },
    }
}
