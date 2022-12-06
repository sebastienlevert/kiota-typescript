import {Properties} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProperties(properties: Properties | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { properties.odataType = n.getStringValue() as any ; },
    }
}
