import {Presence} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeOutOfOfficeSettings} from './serializeOutOfOfficeSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePresence(writer: SerializationWriter, presence: Presence | undefined = {}) : void {
        serializeEntity(writer, presence)
            writer.writeStringValue("activity", presence.activity);
            writer.writeStringValue("availability", presence.availability);
            writer.writeObjectValueFromMethod("outOfOfficeSettings", presence.outOfOfficeSettings as any, serializeOutOfOfficeSettings);
}
