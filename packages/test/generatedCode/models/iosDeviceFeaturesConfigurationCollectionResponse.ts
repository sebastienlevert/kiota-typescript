import {BaseCollectionPaginationCountResponse, IosDeviceFeaturesConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosDeviceFeaturesConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosDeviceFeaturesConfiguration[];
}
