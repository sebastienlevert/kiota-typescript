import {GetNotebookFromWebUrlPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetNotebookFromWebUrlPostRequestBody(getNotebookFromWebUrlPostRequestBody: GetNotebookFromWebUrlPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "webUrl": n => { getNotebookFromWebUrlPostRequestBody.webUrl = n.getStringValue() as any ; },
    }
}
