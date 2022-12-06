import {BaseCollectionPaginationCountResponse, SearchHitsContainer} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SearchHitsContainerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SearchHitsContainer[];
}
