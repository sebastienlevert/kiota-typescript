import {ContentSharingSessionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContentSharingSession} from './serializeContentSharingSession';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentSharingSessionCollectionResponse(writer: SerializationWriter, contentSharingSessionCollectionResponse: ContentSharingSessionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contentSharingSessionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", contentSharingSessionCollectionResponse.value as any, serializeContentSharingSession);
}
