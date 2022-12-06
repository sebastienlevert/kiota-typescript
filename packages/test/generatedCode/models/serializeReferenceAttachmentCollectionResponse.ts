import {ReferenceAttachmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeReferenceAttachment} from './serializeReferenceAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferenceAttachmentCollectionResponse(writer: SerializationWriter, referenceAttachmentCollectionResponse: ReferenceAttachmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, referenceAttachmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", referenceAttachmentCollectionResponse.value as any, serializeReferenceAttachment);
}
