import {BaseCollectionPaginationCountResponse, MacOSGeneralDeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSGeneralDeviceConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSGeneralDeviceConfiguration[];
}
