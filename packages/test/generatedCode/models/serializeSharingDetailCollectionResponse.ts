import {SharingDetailCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharingDetail} from './serializeSharingDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharingDetailCollectionResponse(writer: SerializationWriter, sharingDetailCollectionResponse: SharingDetailCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharingDetailCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sharingDetailCollectionResponse.value as any, serializeSharingDetail);
}
