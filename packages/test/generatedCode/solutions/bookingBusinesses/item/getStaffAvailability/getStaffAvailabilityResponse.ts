import {BaseCollectionPaginationCountResponse, StaffAvailabilityItem} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetStaffAvailabilityResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: StaffAvailabilityItem[];
}
