import {IosHomeScreenItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenItem(iosHomeScreenItem: IosHomeScreenItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { iosHomeScreenItem.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { iosHomeScreenItem.odataType = n.getStringValue() as any ; },
    }
}
