import {BaseCollectionPaginationCountResponse, SearchBucket} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SearchBucketCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SearchBucket[];
}
