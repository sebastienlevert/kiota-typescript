import {BaseCollectionPaginationCountResponse, SharedPCConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedPCConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SharedPCConfiguration[];
}
