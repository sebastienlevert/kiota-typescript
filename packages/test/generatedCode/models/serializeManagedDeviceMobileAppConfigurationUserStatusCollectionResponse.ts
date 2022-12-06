import {ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDeviceMobileAppConfigurationUserStatus} from './serializeManagedDeviceMobileAppConfigurationUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationUserStatusCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationUserStatusCollectionResponse: ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationUserStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedDeviceMobileAppConfigurationUserStatusCollectionResponse.value as any, serializeManagedDeviceMobileAppConfigurationUserStatus);
}
