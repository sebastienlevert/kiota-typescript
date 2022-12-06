import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSharingDetail} from './deserializeIntoSharingDetail';
import {SharingDetailCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharingDetailCollectionResponse(sharingDetailCollectionResponse: SharingDetailCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharingDetailCollectionResponse),
        "value": n => { sharingDetailCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharingDetail) as any ; },
    }
}
