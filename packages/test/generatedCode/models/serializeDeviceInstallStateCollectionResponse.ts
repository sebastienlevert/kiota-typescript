import {DeviceInstallStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceInstallStateCollectionResponse(writer: SerializationWriter, deviceInstallStateCollectionResponse: DeviceInstallStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceInstallStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceInstallStateCollectionResponse.value as any, serializeDeviceInstallState);
}
