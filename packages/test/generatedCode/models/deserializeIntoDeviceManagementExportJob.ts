import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {DeviceManagementExportJob} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementExportJob(deviceManagementExportJob: DeviceManagementExportJob | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementExportJob),
        "expirationDateTime": n => { deviceManagementExportJob.expirationDateTime = n.getDateValue() as any ; },
        "filter": n => { deviceManagementExportJob.filter = n.getStringValue() as any ; },
        "format": n => { deviceManagementExportJob.format = n.getEnumValue<DeviceManagementReportFileFormat>(DeviceManagementReportFileFormat) as any ; },
        "localizationType": n => { deviceManagementExportJob.localizationType = n.getEnumValue<DeviceManagementExportJobLocalizationType>(DeviceManagementExportJobLocalizationType) as any ; },
        "reportName": n => { deviceManagementExportJob.reportName = n.getStringValue() as any ; },
        "requestDateTime": n => { deviceManagementExportJob.requestDateTime = n.getDateValue() as any ; },
        "select": n => { deviceManagementExportJob.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "snapshotId": n => { deviceManagementExportJob.snapshotId = n.getStringValue() as any ; },
        "status": n => { deviceManagementExportJob.status = n.getEnumValue<DeviceManagementReportStatus>(DeviceManagementReportStatus) as any ; },
        "url": n => { deviceManagementExportJob.url = n.getStringValue() as any ; },
    }
}
