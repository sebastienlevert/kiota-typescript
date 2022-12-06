import {BaseCollectionPaginationCountResponse, UnifiedRoleAssignmentSchedule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleAssignmentSchedule[];
}
