import {GetNotebookFromWebUrlPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetNotebookFromWebUrlPostRequestBody(writer: SerializationWriter, getNotebookFromWebUrlPostRequestBody: GetNotebookFromWebUrlPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("webUrl", getNotebookFromWebUrlPostRequestBody.webUrl);
}
