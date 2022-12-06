import {DeviceCompliancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicyCollectionResponse(writer: SerializationWriter, deviceCompliancePolicyCollectionResponse: DeviceCompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceCompliancePolicyCollectionResponse.value as any, serializeDeviceCompliancePolicy);
}
