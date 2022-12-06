import {SpecialFolder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSpecialFolder(specialFolder: SpecialFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { specialFolder.name = n.getStringValue() as any ; },
        "@odata.type": n => { specialFolder.odataType = n.getStringValue() as any ; },
    }
}
