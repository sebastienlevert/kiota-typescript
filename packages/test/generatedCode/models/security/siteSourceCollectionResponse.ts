import {BaseCollectionPaginationCountResponse} from '../';
import {SiteSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SiteSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SiteSource[];
}
