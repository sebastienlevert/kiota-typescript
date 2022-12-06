import {deserializeIntoDocumentSetVersionItem} from './deserializeIntoDocumentSetVersionItem';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoListItemVersion} from './deserializeIntoListItemVersion';
import {DocumentSetVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersion(documentSetVersion: DocumentSetVersion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoListItemVersion(documentSetVersion),
        "comment": n => { documentSetVersion.comment = n.getStringValue() as any ; },
        "createdBy": n => { documentSetVersion.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { documentSetVersion.createdDateTime = n.getDateValue() as any ; },
        "items": n => { documentSetVersion.items = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDocumentSetVersionItem) as any ; },
        "shouldCaptureMinorVersion": n => { documentSetVersion.shouldCaptureMinorVersion = n.getBooleanValue() as any ; },
    }
}
