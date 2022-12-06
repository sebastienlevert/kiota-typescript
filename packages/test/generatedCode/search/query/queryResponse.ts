import {BaseCollectionPaginationCountResponse, SearchResponse} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface QueryResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SearchResponse[];
}
