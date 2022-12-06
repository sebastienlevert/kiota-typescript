import {FileAttachmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFileAttachment} from './serializeFileAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileAttachmentCollectionResponse(writer: SerializationWriter, fileAttachmentCollectionResponse: FileAttachmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, fileAttachmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", fileAttachmentCollectionResponse.value as any, serializeFileAttachment);
}
