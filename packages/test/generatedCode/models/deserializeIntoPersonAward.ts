import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {PersonAward} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonAward(personAward: PersonAward | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(personAward),
        "description": n => { personAward.description = n.getStringValue() as any ; },
        "displayName": n => { personAward.displayName = n.getStringValue() as any ; },
        "issuedDate": n => { personAward.issuedDate = n.getDateOnlyValue() as any ; },
        "issuingAuthority": n => { personAward.issuingAuthority = n.getStringValue() as any ; },
        "thumbnailUrl": n => { personAward.thumbnailUrl = n.getStringValue() as any ; },
        "webUrl": n => { personAward.webUrl = n.getStringValue() as any ; },
    }
}
