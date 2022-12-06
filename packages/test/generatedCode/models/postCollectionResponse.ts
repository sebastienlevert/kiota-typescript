import {BaseCollectionPaginationCountResponse, Post} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PostCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Post[];
}
