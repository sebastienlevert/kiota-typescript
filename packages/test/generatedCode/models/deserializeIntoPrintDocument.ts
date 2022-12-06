import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintDocument} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintDocument(printDocument: PrintDocument | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printDocument),
        "contentType": n => { printDocument.contentType = n.getStringValue() as any ; },
        "displayName": n => { printDocument.displayName = n.getStringValue() as any ; },
        "size": n => { printDocument.size = n.getNumberValue() as any ; },
    }
}
