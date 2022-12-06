import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicySettingStateSummary} from './serializeDeviceCompliancePolicySettingStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicySettingStateSummaryCollectionResponse(writer: SerializationWriter, deviceCompliancePolicySettingStateSummaryCollectionResponse: DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicySettingStateSummaryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceCompliancePolicySettingStateSummaryCollectionResponse.value as any, serializeDeviceCompliancePolicySettingStateSummary);
}
