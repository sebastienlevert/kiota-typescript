import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementTroubleshootingEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementTroubleshootingEvent(deviceManagementTroubleshootingEvent: DeviceManagementTroubleshootingEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementTroubleshootingEvent),
        "correlationId": n => { deviceManagementTroubleshootingEvent.correlationId = n.getStringValue() as any ; },
        "eventDateTime": n => { deviceManagementTroubleshootingEvent.eventDateTime = n.getDateValue() as any ; },
    }
}
