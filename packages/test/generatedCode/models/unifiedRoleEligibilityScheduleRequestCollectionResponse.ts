import {BaseCollectionPaginationCountResponse, UnifiedRoleEligibilityScheduleRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleEligibilityScheduleRequest[];
}
