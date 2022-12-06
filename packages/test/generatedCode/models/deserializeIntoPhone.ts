import {Phone} from './index';
import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhone(phone: Phone | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "language": n => { phone.language = n.getStringValue() as any ; },
        "number": n => { phone.number = n.getStringValue() as any ; },
        "@odata.type": n => { phone.odataType = n.getStringValue() as any ; },
        "region": n => { phone.region = n.getStringValue() as any ; },
        "type": n => { phone.type = n.getEnumValue<PhoneType>(PhoneType) as any ; },
    }
}
