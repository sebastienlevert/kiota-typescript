import {ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from './serializeManagedDeviceMobileAppConfigurationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationAssignmentCollectionResponse(writer: SerializationWriter, managedDeviceMobileAppConfigurationAssignmentCollectionResponse: ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedDeviceMobileAppConfigurationAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedDeviceMobileAppConfigurationAssignmentCollectionResponse.value as any, serializeManagedDeviceMobileAppConfigurationAssignment);
}
