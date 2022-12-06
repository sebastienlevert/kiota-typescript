import {BaseCollectionPaginationCountResponse, DeviceConfigurationAssignment} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AssignResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceConfigurationAssignment[];
}
