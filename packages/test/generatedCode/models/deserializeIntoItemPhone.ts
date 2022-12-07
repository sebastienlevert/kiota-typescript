import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {ItemPhone} from './index';
import {PhoneType} from './phoneType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemPhone(itemPhone: ItemPhone | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(itemPhone),
        "displayName": n => { itemPhone.displayName = n.getStringValue() as any ; },
        "number": n => { itemPhone.number = n.getStringValue() as any ; },
        "type": n => { itemPhone.type = n.getEnumValue<PhoneType>(PhoneType) as any ; },
    }
}
