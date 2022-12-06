import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {ItemAttachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemAttachment(itemAttachment: ItemAttachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(itemAttachment),
        "item": n => { itemAttachment.item = n.getObject(deserializeIntoOutlookItem) as any ; },
    }
}
