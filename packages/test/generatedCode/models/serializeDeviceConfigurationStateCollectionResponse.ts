import {DeviceConfigurationStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationState} from './serializeDeviceConfigurationState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationStateCollectionResponse(writer: SerializationWriter, deviceConfigurationStateCollectionResponse: DeviceConfigurationStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceConfigurationStateCollectionResponse.value as any, serializeDeviceConfigurationState);
}
