import {BaseCollectionPaginationCountResponse, SearchAggregation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SearchAggregationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SearchAggregation[];
}
