import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceCompliancePolicyAssignment} from './deserializeIntoDeviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyAssignmentCollectionResponse(deviceCompliancePolicyAssignmentCollectionResponse: DeviceCompliancePolicyAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicyAssignmentCollectionResponse),
        "value": n => { deviceCompliancePolicyAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicyAssignment) as any ; },
    }
}
