import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LinkedResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLinkedResource(linkedResource: LinkedResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(linkedResource),
        "applicationName": n => { linkedResource.applicationName = n.getStringValue() as any ; },
        "displayName": n => { linkedResource.displayName = n.getStringValue() as any ; },
        "externalId": n => { linkedResource.externalId = n.getStringValue() as any ; },
        "webUrl": n => { linkedResource.webUrl = n.getStringValue() as any ; },
    }
}
