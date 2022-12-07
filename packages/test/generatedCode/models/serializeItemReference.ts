import {ItemReference} from './index';
import {serializeSharepointIds} from './serializeSharepointIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemReference(writer: SerializationWriter, itemReference: ItemReference | undefined = {}) : void {
            writer.writeStringValue("driveId", itemReference.driveId);
            writer.writeStringValue("driveType", itemReference.driveType);
            writer.writeStringValue("id", itemReference.id);
            writer.writeStringValue("name", itemReference.name);
            writer.writeStringValue("path", itemReference.path);
            writer.writeStringValue("shareId", itemReference.shareId);
            writer.writeObjectValueFromMethod("sharepointIds", itemReference.sharepointIds as any, serializeSharepointIds);
            writer.writeStringValue("siteId", itemReference.siteId);
}
