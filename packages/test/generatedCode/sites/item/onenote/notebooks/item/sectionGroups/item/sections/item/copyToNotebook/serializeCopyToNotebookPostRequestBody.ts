import {CopyToNotebookPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToNotebookPostRequestBody(writer: SerializationWriter, copyToNotebookPostRequestBody: CopyToNotebookPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("groupId", copyToNotebookPostRequestBody.groupId);
            writer.writeStringValue("id", copyToNotebookPostRequestBody.id);
            writer.writeStringValue("renameAs", copyToNotebookPostRequestBody.renameAs);
            writer.writeStringValue("siteCollectionId", copyToNotebookPostRequestBody.siteCollectionId);
            writer.writeStringValue("siteId", copyToNotebookPostRequestBody.siteId);
}
