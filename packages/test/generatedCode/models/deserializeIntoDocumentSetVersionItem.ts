import {DocumentSetVersionItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersionItem(documentSetVersionItem: DocumentSetVersionItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "itemId": n => { documentSetVersionItem.itemId = n.getStringValue() as any ; },
        "title": n => { documentSetVersionItem.title = n.getStringValue() as any ; },
        "versionId": n => { documentSetVersionItem.versionId = n.getStringValue() as any ; },
    }
}
