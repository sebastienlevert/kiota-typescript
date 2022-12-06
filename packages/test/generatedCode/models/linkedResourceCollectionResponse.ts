import {BaseCollectionPaginationCountResponse, LinkedResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LinkedResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LinkedResource[];
}
