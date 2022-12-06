import {AddCopyFromContentTypeHubPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddCopyFromContentTypeHubPostRequestBody(writer: SerializationWriter, addCopyFromContentTypeHubPostRequestBody: AddCopyFromContentTypeHubPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("contentTypeId", addCopyFromContentTypeHubPostRequestBody.contentTypeId);
}
