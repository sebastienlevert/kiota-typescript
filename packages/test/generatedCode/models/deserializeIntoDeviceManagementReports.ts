import {deserializeIntoDeviceManagementExportJob} from './deserializeIntoDeviceManagementExportJob';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementReports} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementReports(deviceManagementReports: DeviceManagementReports | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementReports),
        "exportJobs": n => { deviceManagementReports.exportJobs = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementExportJob) as any ; },
    }
}
