import {BaseCollectionPaginationCountResponse, MacOSCustomConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSCustomConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSCustomConfiguration[];
}
