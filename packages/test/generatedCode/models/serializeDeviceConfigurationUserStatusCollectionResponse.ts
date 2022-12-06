import {DeviceConfigurationUserStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationUserStatus} from './serializeDeviceConfigurationUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationUserStatusCollectionResponse(writer: SerializationWriter, deviceConfigurationUserStatusCollectionResponse: DeviceConfigurationUserStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationUserStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceConfigurationUserStatusCollectionResponse.value as any, serializeDeviceConfigurationUserStatus);
}
