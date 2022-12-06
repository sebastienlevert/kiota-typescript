import {AddCopyFromContentTypeHubPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddCopyFromContentTypeHubPostRequestBody(addCopyFromContentTypeHubPostRequestBody: AddCopyFromContentTypeHubPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentTypeId": n => { addCopyFromContentTypeHubPostRequestBody.contentTypeId = n.getStringValue() as any ; },
    }
}
