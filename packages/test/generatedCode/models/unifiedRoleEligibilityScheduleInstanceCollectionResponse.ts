import {BaseCollectionPaginationCountResponse, UnifiedRoleEligibilityScheduleInstance} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleEligibilityScheduleInstance[];
}
