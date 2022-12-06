import {BaseCollectionPaginationCountResponse, Site} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SiteCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Site[];
}
