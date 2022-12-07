import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {ItemPublication} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemPublication(itemPublication: ItemPublication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(itemPublication),
        "description": n => { itemPublication.description = n.getStringValue() as any ; },
        "displayName": n => { itemPublication.displayName = n.getStringValue() as any ; },
        "publishedDate": n => { itemPublication.publishedDate = n.getDateOnlyValue() as any ; },
        "publisher": n => { itemPublication.publisher = n.getStringValue() as any ; },
        "thumbnailUrl": n => { itemPublication.thumbnailUrl = n.getStringValue() as any ; },
        "webUrl": n => { itemPublication.webUrl = n.getStringValue() as any ; },
    }
}
