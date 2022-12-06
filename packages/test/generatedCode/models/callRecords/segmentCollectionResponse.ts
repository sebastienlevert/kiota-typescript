import {BaseCollectionPaginationCountResponse} from '../';
import {Segment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SegmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Segment[];
}
