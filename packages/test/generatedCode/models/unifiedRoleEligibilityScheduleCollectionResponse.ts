import {BaseCollectionPaginationCountResponse, UnifiedRoleEligibilitySchedule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleEligibilitySchedule[];
}
