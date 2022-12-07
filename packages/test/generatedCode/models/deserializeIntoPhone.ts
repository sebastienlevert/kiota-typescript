import {Phone} from './index';
import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhone(phone: Phone | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { phone.number = n.getStringValue() as any ; },
        "type": n => { phone.type = n.getEnumValue<PhoneType>(PhoneType) as any ; },
    }
}
