import {AndroidWorkProfileGeneralDeviceConfiguration, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AndroidWorkProfileGeneralDeviceConfiguration[];
}
