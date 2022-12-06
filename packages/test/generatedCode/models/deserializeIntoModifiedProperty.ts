import {ModifiedProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoModifiedProperty(modifiedProperty: ModifiedProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { modifiedProperty.displayName = n.getStringValue() as any ; },
        "newValue": n => { modifiedProperty.newValue = n.getStringValue() as any ; },
        "@odata.type": n => { modifiedProperty.odataType = n.getStringValue() as any ; },
        "oldValue": n => { modifiedProperty.oldValue = n.getStringValue() as any ; },
    }
}
