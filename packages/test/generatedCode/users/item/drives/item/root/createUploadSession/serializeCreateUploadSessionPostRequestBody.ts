import {serializeDriveItemUploadableProperties} from '../../../../../../models/serializeDriveItemUploadableProperties';
import {CreateUploadSessionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("item", createUploadSessionPostRequestBody.item as any, serializeDriveItemUploadableProperties);
}
