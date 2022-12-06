import {BaseCollectionPaginationCountResponse, Shift} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Shift[];
}
