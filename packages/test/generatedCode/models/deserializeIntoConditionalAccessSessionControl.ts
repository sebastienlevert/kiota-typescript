import {ConditionalAccessSessionControl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessSessionControl(conditionalAccessSessionControl: ConditionalAccessSessionControl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { conditionalAccessSessionControl.isEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { conditionalAccessSessionControl.odataType = n.getStringValue() as any ; },
    }
}
