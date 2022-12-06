import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {DeviceManagementTroubleshootingEventCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse(deviceManagementTroubleshootingEventCollectionResponse: DeviceManagementTroubleshootingEventCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementTroubleshootingEventCollectionResponse),
        "value": n => { deviceManagementTroubleshootingEventCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementTroubleshootingEvent) as any ; },
    }
}
