import {BaseCollectionPaginationCountResponse, ShiftActivity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ShiftActivity[];
}
