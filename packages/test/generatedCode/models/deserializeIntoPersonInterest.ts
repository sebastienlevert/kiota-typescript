import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {PersonInterest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonInterest(personInterest: PersonInterest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(personInterest),
        "categories": n => { personInterest.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "collaborationTags": n => { personInterest.collaborationTags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { personInterest.description = n.getStringValue() as any ; },
        "displayName": n => { personInterest.displayName = n.getStringValue() as any ; },
        "thumbnailUrl": n => { personInterest.thumbnailUrl = n.getStringValue() as any ; },
        "webUrl": n => { personInterest.webUrl = n.getStringValue() as any ; },
    }
}
