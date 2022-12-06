import {BaseCollectionPaginationCountResponse, BookingStaffMember} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingStaffMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingStaffMember[];
}
