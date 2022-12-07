import {BaseItem} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemReference} from './serializeItemReference';
import {serializeUser} from './serializeUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseItem(writer: SerializationWriter, baseItem: BaseItem | undefined = {}) : void {
        serializeEntity(writer, baseItem)
            writer.writeObjectValueFromMethod("createdBy", baseItem.createdBy as any, serializeIdentitySet);
            writer.writeObjectValueFromMethod("createdByUser", baseItem.createdByUser as any, serializeUser);
            writer.writeDateValue("createdDateTime", baseItem.createdDateTime);
            writer.writeStringValue("description", baseItem.description);
            writer.writeStringValue("eTag", baseItem.eTag);
            writer.writeObjectValueFromMethod("lastModifiedBy", baseItem.lastModifiedBy as any, serializeIdentitySet);
            writer.writeObjectValueFromMethod("lastModifiedByUser", baseItem.lastModifiedByUser as any, serializeUser);
            writer.writeDateValue("lastModifiedDateTime", baseItem.lastModifiedDateTime);
            writer.writeStringValue("name", baseItem.name);
            writer.writeObjectValueFromMethod("parentReference", baseItem.parentReference as any, serializeItemReference);
            writer.writeStringValue("webUrl", baseItem.webUrl);
}
