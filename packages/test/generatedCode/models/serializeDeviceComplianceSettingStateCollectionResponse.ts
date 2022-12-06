import {DeviceComplianceSettingStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceSettingState} from './serializeDeviceComplianceSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceSettingStateCollectionResponse(writer: SerializationWriter, deviceComplianceSettingStateCollectionResponse: DeviceComplianceSettingStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceSettingStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceComplianceSettingStateCollectionResponse.value as any, serializeDeviceComplianceSettingState);
}
