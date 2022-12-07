import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {ProfilePhotoCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProfilePhotoCollectionResponse(profilePhotoCollectionResponse: ProfilePhotoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { profilePhotoCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { profilePhotoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProfilePhoto) as any ; },
    }
}
