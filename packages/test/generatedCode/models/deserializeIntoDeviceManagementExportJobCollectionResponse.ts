import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDeviceManagementExportJob} from './deserializeIntoDeviceManagementExportJob';
import {DeviceManagementExportJobCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExportJobCollectionResponse(deviceManagementExportJobCollectionResponse: DeviceManagementExportJobCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementExportJobCollectionResponse),
        "value": n => { deviceManagementExportJobCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementExportJob) as any ; },
    }
}
