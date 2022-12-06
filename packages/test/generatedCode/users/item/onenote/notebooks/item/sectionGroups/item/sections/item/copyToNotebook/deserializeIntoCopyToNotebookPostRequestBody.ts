import {CopyToNotebookPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToNotebookPostRequestBody(copyToNotebookPostRequestBody: CopyToNotebookPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { copyToNotebookPostRequestBody.groupId = n.getStringValue() as any ; },
        "id": n => { copyToNotebookPostRequestBody.id = n.getStringValue() as any ; },
        "renameAs": n => { copyToNotebookPostRequestBody.renameAs = n.getStringValue() as any ; },
        "siteCollectionId": n => { copyToNotebookPostRequestBody.siteCollectionId = n.getStringValue() as any ; },
        "siteId": n => { copyToNotebookPostRequestBody.siteId = n.getStringValue() as any ; },
    }
}
