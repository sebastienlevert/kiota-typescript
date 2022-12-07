import {AppRole} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppRole(writer: SerializationWriter, appRole: AppRole | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("allowedMemberTypes", appRole.allowedMemberTypes);
            writer.writeStringValue("description", appRole.description);
            writer.writeStringValue("displayName", appRole.displayName);
            writer.writeStringValue("id", appRole.id);
            writer.writeBooleanValue("isEnabled", appRole.isEnabled);
            writer.writeStringValue("origin", appRole.origin);
            writer.writeStringValue("value", appRole.value);
}
