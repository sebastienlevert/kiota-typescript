import {BaseCollectionPaginationCountResponse, MacOSDeviceFeaturesConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSDeviceFeaturesConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSDeviceFeaturesConfiguration[];
}
