import {CopyNotebookPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyNotebookPostRequestBody(copyNotebookPostRequestBody: CopyNotebookPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyNotebookPostRequestBody.groupId = n.getStringValue() as any ; },
        "notebookFolder": n => { copyNotebookPostRequestBody.notebookFolder = n.getStringValue() as any ; },
        "renameAs": n => { copyNotebookPostRequestBody.renameAs = n.getStringValue() as any ; },
        "siteCollectionId": n => { copyNotebookPostRequestBody.siteCollectionId = n.getStringValue() as any ; },
        "siteId": n => { copyNotebookPostRequestBody.siteId = n.getStringValue() as any ; },
    }
}
