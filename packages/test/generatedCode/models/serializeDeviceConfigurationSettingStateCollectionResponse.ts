import {DeviceConfigurationSettingStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfigurationSettingState} from './serializeDeviceConfigurationSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationSettingStateCollectionResponse(writer: SerializationWriter, deviceConfigurationSettingStateCollectionResponse: DeviceConfigurationSettingStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationSettingStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceConfigurationSettingStateCollectionResponse.value as any, serializeDeviceConfigurationSettingState);
}
