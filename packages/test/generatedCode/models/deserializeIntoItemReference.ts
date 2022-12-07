import {deserializeIntoSharepointIds} from './deserializeIntoSharepointIds';
import {ItemReference} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemReference(itemReference: ItemReference | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "driveId": n => { itemReference.driveId = n.getStringValue() as any ; },
        "driveType": n => { itemReference.driveType = n.getStringValue() as any ; },
        "id": n => { itemReference.id = n.getStringValue() as any ; },
        "name": n => { itemReference.name = n.getStringValue() as any ; },
        "path": n => { itemReference.path = n.getStringValue() as any ; },
        "shareId": n => { itemReference.shareId = n.getStringValue() as any ; },
        "sharepointIds": n => { itemReference.sharepointIds = n.getObject(deserializeIntoSharepointIds) as any ; },
        "siteId": n => { itemReference.siteId = n.getStringValue() as any ; },
    }
}
