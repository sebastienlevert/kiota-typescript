import {SharepointIds} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharepointIds(sharepointIds: SharepointIds | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "listId": n => { sharepointIds.listId = n.getStringValue() as any ; },
        "listItemId": n => { sharepointIds.listItemId = n.getStringValue() as any ; },
        "listItemUniqueId": n => { sharepointIds.listItemUniqueId = n.getStringValue() as any ; },
        "siteId": n => { sharepointIds.siteId = n.getStringValue() as any ; },
        "siteUrl": n => { sharepointIds.siteUrl = n.getStringValue() as any ; },
        "tenantId": n => { sharepointIds.tenantId = n.getStringValue() as any ; },
        "webId": n => { sharepointIds.webId = n.getStringValue() as any ; },
    }
}
