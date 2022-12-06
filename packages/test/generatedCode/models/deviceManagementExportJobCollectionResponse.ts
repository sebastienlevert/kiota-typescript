import {BaseCollectionPaginationCountResponse, DeviceManagementExportJob} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExportJobCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceManagementExportJob[];
}
