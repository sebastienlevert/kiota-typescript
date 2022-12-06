import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOnlineMeeting} from './deserializeIntoOnlineMeeting';
import {OnlineMeetingCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeetingCollectionResponse(onlineMeetingCollectionResponse: OnlineMeetingCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onlineMeetingCollectionResponse),
        "value": n => { onlineMeetingCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnlineMeeting) as any ; },
    }
}
