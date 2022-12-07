import {SharepointIds} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharepointIds(writer: SerializationWriter, sharepointIds: SharepointIds | undefined = {}) : void {
            writer.writeStringValue("listId", sharepointIds.listId);
            writer.writeStringValue("listItemId", sharepointIds.listItemId);
            writer.writeStringValue("listItemUniqueId", sharepointIds.listItemUniqueId);
            writer.writeStringValue("siteId", sharepointIds.siteId);
            writer.writeStringValue("siteUrl", sharepointIds.siteUrl);
            writer.writeStringValue("tenantId", sharepointIds.tenantId);
            writer.writeStringValue("webId", sharepointIds.webId);
}
