import {DeviceCompliancePolicyAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyAssignment} from './serializeDeviceCompliancePolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyAssignmentCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyAssignmentCollectionResponse: DeviceCompliancePolicyAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceCompliancePolicyAssignmentCollectionResponse.value as any, serializeDeviceCompliancePolicyAssignment);
}
