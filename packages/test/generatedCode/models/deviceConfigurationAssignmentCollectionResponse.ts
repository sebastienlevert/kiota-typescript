import {BaseCollectionPaginationCountResponse, DeviceConfigurationAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceConfigurationAssignment[];
}
