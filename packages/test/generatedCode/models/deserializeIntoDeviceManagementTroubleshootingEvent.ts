import {deserializeIntoDeviceManagementTroubleshootingErrorDetails} from './deserializeIntoDeviceManagementTroubleshootingErrorDetails';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {DeviceManagementTroubleshootingEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementTroubleshootingEvent(deviceManagementTroubleshootingEvent: DeviceManagementTroubleshootingEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementTroubleshootingEvent),
        "additionalInformation": n => { deviceManagementTroubleshootingEvent.additionalInformation = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "correlationId": n => { deviceManagementTroubleshootingEvent.correlationId = n.getStringValue() as any ; },
        "eventDateTime": n => { deviceManagementTroubleshootingEvent.eventDateTime = n.getDateValue() as any ; },
        "eventName": n => { deviceManagementTroubleshootingEvent.eventName = n.getStringValue() as any ; },
        "troubleshootingErrorDetails": n => { deviceManagementTroubleshootingEvent.troubleshootingErrorDetails = n.getObject(deserializeIntoDeviceManagementTroubleshootingErrorDetails) as any ; },
    }
}
