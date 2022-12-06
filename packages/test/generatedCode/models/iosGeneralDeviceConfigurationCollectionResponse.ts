import {BaseCollectionPaginationCountResponse, IosGeneralDeviceConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosGeneralDeviceConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosGeneralDeviceConfiguration[];
}
