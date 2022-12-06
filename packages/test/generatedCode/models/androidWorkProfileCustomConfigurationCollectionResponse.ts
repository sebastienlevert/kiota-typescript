import {AndroidWorkProfileCustomConfiguration, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileCustomConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AndroidWorkProfileCustomConfiguration[];
}
