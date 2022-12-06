import {DeviceComplianceDeviceStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceDeviceStatus} from './serializeDeviceComplianceDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceDeviceStatusCollectionResponse(writer: SerializationWriter, deviceComplianceDeviceStatusCollectionResponse: DeviceComplianceDeviceStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceDeviceStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceComplianceDeviceStatusCollectionResponse.value as any, serializeDeviceComplianceDeviceStatus);
}
