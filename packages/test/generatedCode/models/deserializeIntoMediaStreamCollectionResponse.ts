import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMediaStream} from './deserializeIntoMediaStream';
import {MediaStreamCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaStreamCollectionResponse(mediaStreamCollectionResponse: MediaStreamCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mediaStreamCollectionResponse),
        "value": n => { mediaStreamCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMediaStream) as any ; },
    }
}
