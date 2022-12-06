import {DeviceManagementReports} from './index';
import {serializeDeviceManagementExportJob} from './serializeDeviceManagementExportJob';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementReports(writer: SerializationWriter, deviceManagementReports: DeviceManagementReports | undefined = {}) : void {
        serializeEntity(writer, deviceManagementReports)
            writer.writeCollectionOfObjectValuesFromMethod("exportJobs", deviceManagementReports.exportJobs as any, serializeDeviceManagementExportJob);
}
