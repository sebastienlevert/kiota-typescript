import {BaseCollectionPaginationCountResponse, BookingStaffMemberBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingStaffMemberBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingStaffMemberBase[];
}
