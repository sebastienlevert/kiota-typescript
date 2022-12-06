import {DeviceManagementExportJob, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementReports extends Entity, Partial<Parsable> {
    /** Entity representing a job to export a report */
    exportJobs?: DeviceManagementExportJob[];
}
