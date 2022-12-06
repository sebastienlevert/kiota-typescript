import {deserializeIntoAlert} from './deserializeIntoAlert';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AlertCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertCollectionResponse(alertCollectionResponse: AlertCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alertCollectionResponse),
        "value": n => { alertCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlert) as any ; },
    }
}
