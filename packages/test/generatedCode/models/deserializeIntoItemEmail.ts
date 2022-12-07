import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {EmailType} from './emailType';
import {ItemEmail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemEmail(itemEmail: ItemEmail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(itemEmail),
        "address": n => { itemEmail.address = n.getStringValue() as any ; },
        "displayName": n => { itemEmail.displayName = n.getStringValue() as any ; },
        "type": n => { itemEmail.type = n.getEnumValue<EmailType>(EmailType) as any ; },
    }
}
