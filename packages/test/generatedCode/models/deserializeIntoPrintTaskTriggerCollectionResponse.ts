import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintTaskTrigger} from './deserializeIntoPrintTaskTrigger';
import {PrintTaskTriggerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskTriggerCollectionResponse(printTaskTriggerCollectionResponse: PrintTaskTriggerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskTriggerCollectionResponse),
        "value": n => { printTaskTriggerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTaskTrigger) as any ; },
    }
}
