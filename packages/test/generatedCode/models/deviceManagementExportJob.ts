import {DeviceManagementExportJobLocalizationType} from './deviceManagementExportJobLocalizationType';
import {DeviceManagementReportFileFormat} from './deviceManagementReportFileFormat';
import {DeviceManagementReportStatus} from './deviceManagementReportStatus';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExportJob extends Entity, Partial<Parsable> {
    /** Time that the exported report expires */
    expirationDateTime?: Date;
    /** Filters applied on the report */
    filter?: string;
    /** Possible values for the file format of a report */
    format?: DeviceManagementReportFileFormat;
    /** Configures how the requested export job is localized */
    localizationType?: DeviceManagementExportJobLocalizationType;
    /** Name of the report */
    reportName?: string;
    /** Time that the exported report was requested */
    requestDateTime?: Date;
    /** Columns selected from the report */
    select?: string[];
    /** A snapshot is an identifiable subset of the dataset represented by the ReportName. A sessionId or CachedReportConfiguration id can be used here. If a sessionId is specified, Filter, Select, and OrderBy are applied to the data represented by the sessionId. Filter, Select, and OrderBy cannot be specified together with a CachedReportConfiguration id. */
    snapshotId?: string;
    /** Possible statuses associated with a generated report */
    status?: DeviceManagementReportStatus;
    /** Temporary location of the exported report */
    url?: string;
}
