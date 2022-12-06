import {DeviceComplianceUserStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceUserStatus} from './serializeDeviceComplianceUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceUserStatusCollectionResponse(writer: SerializationWriter, deviceComplianceUserStatusCollectionResponse: DeviceComplianceUserStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceUserStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceComplianceUserStatusCollectionResponse.value as any, serializeDeviceComplianceUserStatus);
}
