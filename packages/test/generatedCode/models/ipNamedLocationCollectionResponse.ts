import {BaseCollectionPaginationCountResponse, IpNamedLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IpNamedLocationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IpNamedLocation[];
}
