import {ServiceAnnouncementAttachmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceAnnouncementAttachment} from './serializeServiceAnnouncementAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncementAttachmentCollectionResponse(writer: SerializationWriter, serviceAnnouncementAttachmentCollectionResponse: ServiceAnnouncementAttachmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceAnnouncementAttachmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", serviceAnnouncementAttachmentCollectionResponse.value as any, serializeServiceAnnouncementAttachment);
}
