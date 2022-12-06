import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContentSharingSession} from './deserializeIntoContentSharingSession';
import {ContentSharingSessionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentSharingSessionCollectionResponse(contentSharingSessionCollectionResponse: ContentSharingSessionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contentSharingSessionCollectionResponse),
        "value": n => { contentSharingSessionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentSharingSession) as any ; },
    }
}
