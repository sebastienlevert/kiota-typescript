import {BaseCollectionPaginationCountResponse, Trending} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TrendingCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Trending[];
}
