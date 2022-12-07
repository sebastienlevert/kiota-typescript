import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {PersonWebsite} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonWebsite(personWebsite: PersonWebsite | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(personWebsite),
        "categories": n => { personWebsite.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { personWebsite.description = n.getStringValue() as any ; },
        "displayName": n => { personWebsite.displayName = n.getStringValue() as any ; },
        "thumbnailUrl": n => { personWebsite.thumbnailUrl = n.getStringValue() as any ; },
        "webUrl": n => { personWebsite.webUrl = n.getStringValue() as any ; },
    }
}
