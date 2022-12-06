import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileAppCategory} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCategory(mobileAppCategory: MobileAppCategory | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppCategory),
        "displayName": n => { mobileAppCategory.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { mobileAppCategory.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
