import {PersonType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonType(personType: PersonType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "class": n => { personType.class_escaped = n.getStringValue() as any ; },
        "@odata.type": n => { personType.odataType = n.getStringValue() as any ; },
        "subclass": n => { personType.subclass = n.getStringValue() as any ; },
    }
}
