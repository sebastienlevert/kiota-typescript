import {AppleDeviceFeaturesConfigurationBase, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppleDeviceFeaturesConfigurationBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AppleDeviceFeaturesConfigurationBase[];
}
