import {ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDeviceMobileAppConfigurationDeviceStatus} from './serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse: ManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedDeviceMobileAppConfigurationDeviceStatusCollectionResponse.value as any, serializeManagedDeviceMobileAppConfigurationDeviceStatus);
}
