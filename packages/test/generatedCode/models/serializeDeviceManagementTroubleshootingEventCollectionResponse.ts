import {DeviceManagementTroubleshootingEventCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementTroubleshootingEvent} from './serializeDeviceManagementTroubleshootingEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingEventCollectionResponse(writer: SerializationWriter, deviceManagementTroubleshootingEventCollectionResponse: DeviceManagementTroubleshootingEventCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementTroubleshootingEventCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceManagementTroubleshootingEventCollectionResponse.value as any, serializeDeviceManagementTroubleshootingEvent);
}
