import {DeviceManagementTroubleshootingEvent} from './index';
import {serializeDeviceManagementTroubleshootingErrorDetails} from './serializeDeviceManagementTroubleshootingErrorDetails';
import {serializeEntity} from './serializeEntity';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingEvent(writer: SerializationWriter, deviceManagementTroubleshootingEvent: DeviceManagementTroubleshootingEvent | undefined = {}) : void {
        serializeEntity(writer, deviceManagementTroubleshootingEvent)
            writer.writeCollectionOfObjectValuesFromMethod("additionalInformation", deviceManagementTroubleshootingEvent.additionalInformation as any, serializeKeyValuePair);
            writer.writeStringValue("correlationId", deviceManagementTroubleshootingEvent.correlationId);
            writer.writeDateValue("eventDateTime", deviceManagementTroubleshootingEvent.eventDateTime);
            writer.writeStringValue("eventName", deviceManagementTroubleshootingEvent.eventName);
            writer.writeObjectValueFromMethod("troubleshootingErrorDetails", deviceManagementTroubleshootingEvent.troubleshootingErrorDetails as any, serializeDeviceManagementTroubleshootingErrorDetails);
}
