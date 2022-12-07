import {deserializeIntoContentTypeInfo} from './deserializeIntoContentTypeInfo';
import {DocumentSetContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetContent(documentSetContent: DocumentSetContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentType": n => { documentSetContent.contentType = n.getObject(deserializeIntoContentTypeInfo) as any ; },
        "fileName": n => { documentSetContent.fileName = n.getStringValue() as any ; },
        "folderName": n => { documentSetContent.folderName = n.getStringValue() as any ; },
    }
}
