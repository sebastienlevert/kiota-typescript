import {ProfilePhotoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProfilePhotoCollectionResponse(writer: SerializationWriter, profilePhotoCollectionResponse: ProfilePhotoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, profilePhotoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", profilePhotoCollectionResponse.value as any, serializeProfilePhoto);
}
