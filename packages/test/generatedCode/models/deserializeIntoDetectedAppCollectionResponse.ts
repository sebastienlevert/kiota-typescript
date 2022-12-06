import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDetectedApp} from './deserializeIntoDetectedApp';
import {DetectedAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDetectedAppCollectionResponse(detectedAppCollectionResponse: DetectedAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(detectedAppCollectionResponse),
        "value": n => { detectedAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDetectedApp) as any ; },
    }
}
