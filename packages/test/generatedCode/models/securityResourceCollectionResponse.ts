import {BaseCollectionPaginationCountResponse, SecurityResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecurityResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SecurityResource[];
}
