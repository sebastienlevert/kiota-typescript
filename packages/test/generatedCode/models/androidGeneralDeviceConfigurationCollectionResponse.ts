import {AndroidGeneralDeviceConfiguration, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidGeneralDeviceConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AndroidGeneralDeviceConfiguration[];
}
