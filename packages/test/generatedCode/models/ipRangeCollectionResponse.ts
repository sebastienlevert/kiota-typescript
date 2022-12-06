import {BaseCollectionPaginationCountResponse, IpRange} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IpRangeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IpRange[];
}
