import {SharedDriveItem} from './index';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeList} from './serializeList';
import {serializeListItem} from './serializeListItem';
import {serializePermission} from './serializePermission';
import {serializeSite} from './serializeSite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedDriveItem(writer: SerializationWriter, sharedDriveItem: SharedDriveItem | undefined = {}) : void {
        serializeBaseItem(writer, sharedDriveItem)
            writer.writeObjectValueFromMethod("driveItem", sharedDriveItem.driveItem as any, serializeDriveItem);
            writer.writeCollectionOfObjectValuesFromMethod("items", sharedDriveItem.items as any, serializeDriveItem);
            writer.writeObjectValueFromMethod("list", sharedDriveItem.list as any, serializeList);
            writer.writeObjectValueFromMethod("listItem", sharedDriveItem.listItem as any, serializeListItem);
            writer.writeObjectValueFromMethod("owner", sharedDriveItem.owner as any, serializeIdentitySet);
            writer.writeObjectValueFromMethod("permission", sharedDriveItem.permission as any, serializePermission);
            writer.writeObjectValueFromMethod("root", sharedDriveItem.root as any, serializeDriveItem);
            writer.writeObjectValueFromMethod("site", sharedDriveItem.site as any, serializeSite);
}
