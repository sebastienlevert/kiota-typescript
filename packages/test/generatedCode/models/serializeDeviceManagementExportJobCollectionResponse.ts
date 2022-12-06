import {DeviceManagementExportJobCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementExportJob} from './serializeDeviceManagementExportJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementExportJobCollectionResponse(writer: SerializationWriter, deviceManagementExportJobCollectionResponse: DeviceManagementExportJobCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementExportJobCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deviceManagementExportJobCollectionResponse.value as any, serializeDeviceManagementExportJob);
}
