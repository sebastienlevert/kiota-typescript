import {BaseCollectionPaginationCountResponse, TargetResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TargetResource[];
}
