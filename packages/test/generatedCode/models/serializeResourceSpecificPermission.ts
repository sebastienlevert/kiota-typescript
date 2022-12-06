import {ResourceSpecificPermission} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceSpecificPermission(writer: SerializationWriter, resourceSpecificPermission: ResourceSpecificPermission | undefined = {}) : void {
            writer.writeStringValue("description", resourceSpecificPermission.description);
            writer.writeStringValue("displayName", resourceSpecificPermission.displayName);
            writer.writeStringValue("id", resourceSpecificPermission.id);
            writer.writeBooleanValue("isEnabled", resourceSpecificPermission.isEnabled);
            writer.writeStringValue("@odata.type", resourceSpecificPermission.odataType);
            writer.writeStringValue("value", resourceSpecificPermission.value);
}
