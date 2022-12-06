import {AddCopyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddCopyPostRequestBody(addCopyPostRequestBody: AddCopyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentType": n => { addCopyPostRequestBody.contentType = n.getStringValue() as any ; },
    }
}
