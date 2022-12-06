import {DeviceManagementPartnerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementPartner} from './serializeDeviceManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartnerCollectionResponse(writer: SerializationWriter, deviceManagementPartnerCollectionResponse: DeviceManagementPartnerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementPartnerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceManagementPartnerCollectionResponse.value as any, serializeDeviceManagementPartner);
}
