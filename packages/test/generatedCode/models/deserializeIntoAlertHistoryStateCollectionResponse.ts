import {deserializeIntoAlertHistoryState} from './deserializeIntoAlertHistoryState';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AlertHistoryStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertHistoryStateCollectionResponse(alertHistoryStateCollectionResponse: AlertHistoryStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alertHistoryStateCollectionResponse),
        "value": n => { alertHistoryStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlertHistoryState) as any ; },
    }
}
