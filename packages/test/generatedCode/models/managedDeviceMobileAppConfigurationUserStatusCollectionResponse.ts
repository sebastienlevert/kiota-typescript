import {BaseCollectionPaginationCountResponse, ManagedDeviceMobileAppConfigurationUserStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationUserStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedDeviceMobileAppConfigurationUserStatus[];
}
