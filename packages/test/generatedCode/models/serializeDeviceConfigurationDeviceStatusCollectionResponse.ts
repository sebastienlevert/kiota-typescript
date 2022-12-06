import {DeviceConfigurationDeviceStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationDeviceStatus} from './serializeDeviceConfigurationDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationDeviceStatusCollectionResponse(writer: SerializationWriter, deviceConfigurationDeviceStatusCollectionResponse: DeviceConfigurationDeviceStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationDeviceStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceConfigurationDeviceStatusCollectionResponse.value as any, serializeDeviceConfigurationDeviceStatus);
}
