import {DeviceCompliancePolicyStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicyState} from './serializeDeviceCompliancePolicyState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyStateCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyStateCollectionResponse: DeviceCompliancePolicyStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceCompliancePolicyStateCollectionResponse.value as any, serializeDeviceCompliancePolicyState);
}
