import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {PersonAnnotation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonAnnotation(personAnnotation: PersonAnnotation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(personAnnotation),
        "detail": n => { personAnnotation.detail = n.getObject(deserializeIntoItemBody) as any ; },
        "displayName": n => { personAnnotation.displayName = n.getStringValue() as any ; },
        "thumbnailUrl": n => { personAnnotation.thumbnailUrl = n.getStringValue() as any ; },
    }
}
