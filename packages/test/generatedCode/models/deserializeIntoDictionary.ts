import {Dictionary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDictionary(dictionary: Dictionary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { dictionary.odataType = n.getStringValue() as any ; },
    }
}
