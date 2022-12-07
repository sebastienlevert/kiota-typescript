import {ItemActivity} from './index';
import {serializeAccessAction} from './serializeAccessAction';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivity(writer: SerializationWriter, itemActivity: ItemActivity | undefined = {}) : void {
        serializeEntity(writer, itemActivity)
            writer.writeObjectValueFromMethod("access", itemActivity.access as any, serializeAccessAction);
            writer.writeDateValue("activityDateTime", itemActivity.activityDateTime);
            writer.writeObjectValueFromMethod("actor", itemActivity.actor as any, serializeIdentitySet);
            writer.writeObjectValueFromMethod("driveItem", itemActivity.driveItem as any, serializeDriveItem);
}
