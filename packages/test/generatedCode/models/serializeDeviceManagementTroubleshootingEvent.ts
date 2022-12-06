import {DeviceManagementTroubleshootingEvent} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingEvent(writer: SerializationWriter, deviceManagementTroubleshootingEvent: DeviceManagementTroubleshootingEvent | undefined = {}) : void {
        serializeEntity(writer, deviceManagementTroubleshootingEvent)
            writer.writeStringValue("correlationId", deviceManagementTroubleshootingEvent.correlationId);
            writer.writeDateValue("eventDateTime", deviceManagementTroubleshootingEvent.eventDateTime);
}
