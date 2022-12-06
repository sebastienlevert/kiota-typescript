import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintTask} from './deserializeIntoPrintTask';
import {PrintTaskCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskCollectionResponse(printTaskCollectionResponse: PrintTaskCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskCollectionResponse),
        "value": n => { printTaskCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTask) as any ; },
    }
}
