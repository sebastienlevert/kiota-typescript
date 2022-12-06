import {CopyNotebookPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyNotebookPostRequestBody(writer: SerializationWriter, copyNotebookPostRequestBody: CopyNotebookPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("groupId", copyNotebookPostRequestBody.groupId);
            writer.writeStringValue("notebookFolder", copyNotebookPostRequestBody.notebookFolder);
            writer.writeStringValue("renameAs", copyNotebookPostRequestBody.renameAs);
            writer.writeStringValue("siteCollectionId", copyNotebookPostRequestBody.siteCollectionId);
            writer.writeStringValue("siteId", copyNotebookPostRequestBody.siteId);
}
