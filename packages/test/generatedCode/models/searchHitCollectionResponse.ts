import {BaseCollectionPaginationCountResponse, SearchHit} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SearchHitCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SearchHit[];
}
