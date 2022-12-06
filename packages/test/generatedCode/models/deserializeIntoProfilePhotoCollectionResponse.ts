import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {ProfilePhotoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProfilePhotoCollectionResponse(profilePhotoCollectionResponse: ProfilePhotoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(profilePhotoCollectionResponse),
        "value": n => { profilePhotoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProfilePhoto) as any ; },
    }
}
