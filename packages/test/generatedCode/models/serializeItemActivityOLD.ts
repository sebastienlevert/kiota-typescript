import {ItemActivityOLD} from './index';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemActionSet} from './serializeItemActionSet';
import {serializeItemActivityTimeSet} from './serializeItemActivityTimeSet';
import {serializeListItem} from './serializeListItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActivityOLD(writer: SerializationWriter, itemActivityOLD: ItemActivityOLD | undefined = {}) : void {
        serializeEntity(writer, itemActivityOLD)
            writer.writeObjectValueFromMethod("action", itemActivityOLD.action as any, serializeItemActionSet);
            writer.writeObjectValueFromMethod("actor", itemActivityOLD.actor as any, serializeIdentitySet);
            writer.writeObjectValueFromMethod("driveItem", itemActivityOLD.driveItem as any, serializeDriveItem);
            writer.writeObjectValueFromMethod("listItem", itemActivityOLD.listItem as any, serializeListItem);
            writer.writeObjectValueFromMethod("times", itemActivityOLD.times as any, serializeItemActivityTimeSet);
}
