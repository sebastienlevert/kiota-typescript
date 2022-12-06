import {BaseCollectionPaginationCountResponse, IosMobileAppConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosMobileAppConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosMobileAppConfiguration[];
}
