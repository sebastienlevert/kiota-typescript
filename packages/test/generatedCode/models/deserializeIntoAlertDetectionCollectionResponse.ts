import {deserializeIntoAlertDetection} from './deserializeIntoAlertDetection';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AlertDetectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertDetectionCollectionResponse(alertDetectionCollectionResponse: AlertDetectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alertDetectionCollectionResponse),
        "value": n => { alertDetectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlertDetection) as any ; },
    }
}
