import {BaseCollectionPaginationCountResponse, NamedLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NamedLocationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: NamedLocation[];
}
