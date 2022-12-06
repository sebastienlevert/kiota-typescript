import {BaseCollectionPaginationCountResponse, ManagedDeviceMobileAppConfigurationAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedDeviceMobileAppConfigurationAssignment[];
}
