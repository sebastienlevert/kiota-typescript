import {DeviceConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationCollectionResponse(writer: SerializationWriter, deviceConfigurationCollectionResponse: DeviceConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceConfigurationCollectionResponse.value as any, serializeDeviceConfiguration);
}
