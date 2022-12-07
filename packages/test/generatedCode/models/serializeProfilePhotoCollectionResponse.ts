import {ProfilePhotoCollectionResponse} from './index';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProfilePhotoCollectionResponse(writer: SerializationWriter, profilePhotoCollectionResponse: ProfilePhotoCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", profilePhotoCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", profilePhotoCollectionResponse.value as any, serializeProfilePhoto);
}
