import {DeviceCompliancePolicySettingStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicySettingState} from './serializeDeviceCompliancePolicySettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicySettingStateCollectionResponse(writer: SerializationWriter, deviceCompliancePolicySettingStateCollectionResponse: DeviceCompliancePolicySettingStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicySettingStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceCompliancePolicySettingStateCollectionResponse.value as any, serializeDeviceCompliancePolicySettingState);
}
