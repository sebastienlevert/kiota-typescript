import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedDeviceMobileAppConfigurationAssignment} from './deserializeIntoManagedDeviceMobileAppConfigurationAssignment';
import {ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse(managedDeviceMobileAppConfigurationAssignmentCollectionResponse: ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationAssignmentCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationAssignment) as any ; },
    }
}
