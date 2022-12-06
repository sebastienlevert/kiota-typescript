import {ManagedDeviceMobileAppConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDeviceMobileAppConfiguration} from './serializeManagedDeviceMobileAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationCollectionResponse: ManagedDeviceMobileAppConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedDeviceMobileAppConfigurationCollectionResponse.value as any, serializeManagedDeviceMobileAppConfiguration);
}
