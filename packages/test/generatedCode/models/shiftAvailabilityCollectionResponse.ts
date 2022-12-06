import {BaseCollectionPaginationCountResponse, ShiftAvailability} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftAvailabilityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ShiftAvailability[];
}
