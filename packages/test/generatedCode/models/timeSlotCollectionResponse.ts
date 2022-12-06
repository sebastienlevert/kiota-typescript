import {BaseCollectionPaginationCountResponse, TimeSlot} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeSlotCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TimeSlot[];
}
