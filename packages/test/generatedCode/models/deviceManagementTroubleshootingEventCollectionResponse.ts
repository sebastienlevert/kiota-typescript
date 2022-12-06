import {BaseCollectionPaginationCountResponse, DeviceManagementTroubleshootingEvent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementTroubleshootingEventCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceManagementTroubleshootingEvent[];
}
