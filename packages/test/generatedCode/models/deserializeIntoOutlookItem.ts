import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OutlookItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookItem(outlookItem: OutlookItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookItem),
        "categories": n => { outlookItem.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "changeKey": n => { outlookItem.changeKey = n.getStringValue() as any ; },
        "createdDateTime": n => { outlookItem.createdDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { outlookItem.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
