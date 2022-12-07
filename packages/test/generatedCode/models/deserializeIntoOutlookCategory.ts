import {CategoryColor} from './categoryColor';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OutlookCategory} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookCategory(outlookCategory: OutlookCategory | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookCategory),
        "color": n => { outlookCategory.color = n.getEnumValue<CategoryColor>(CategoryColor) as any ; },
        "displayName": n => { outlookCategory.displayName = n.getStringValue() as any ; },
    }
}
