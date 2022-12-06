import {deserializeIntoAlertTrigger} from './deserializeIntoAlertTrigger';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AlertTriggerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertTriggerCollectionResponse(alertTriggerCollectionResponse: AlertTriggerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alertTriggerCollectionResponse),
        "value": n => { alertTriggerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlertTrigger) as any ; },
    }
}
