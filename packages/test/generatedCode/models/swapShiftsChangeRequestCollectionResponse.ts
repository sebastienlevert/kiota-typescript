import {BaseCollectionPaginationCountResponse, SwapShiftsChangeRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SwapShiftsChangeRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SwapShiftsChangeRequest[];
}
