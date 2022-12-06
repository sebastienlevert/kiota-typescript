import {MimeContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMimeContent(mimeContent: MimeContent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mimeContent.odataType = n.getStringValue() as any ; },
        "type": n => { mimeContent.type = n.getStringValue() as any ; },
        "value": n => { mimeContent.value = n.getStringValue() as any ; },
    }
}
