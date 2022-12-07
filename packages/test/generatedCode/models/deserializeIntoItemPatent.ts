import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {ItemPatent} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemPatent(itemPatent: ItemPatent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(itemPatent),
        "description": n => { itemPatent.description = n.getStringValue() as any ; },
        "displayName": n => { itemPatent.displayName = n.getStringValue() as any ; },
        "isPending": n => { itemPatent.isPending = n.getBooleanValue() as any ; },
        "issuedDate": n => { itemPatent.issuedDate = n.getDateOnlyValue() as any ; },
        "issuingAuthority": n => { itemPatent.issuingAuthority = n.getStringValue() as any ; },
        "number": n => { itemPatent.number = n.getStringValue() as any ; },
        "webUrl": n => { itemPatent.webUrl = n.getStringValue() as any ; },
    }
}
