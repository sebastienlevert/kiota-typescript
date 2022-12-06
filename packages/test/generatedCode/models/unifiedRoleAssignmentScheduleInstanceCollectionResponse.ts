import {BaseCollectionPaginationCountResponse, UnifiedRoleAssignmentScheduleInstance} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleAssignmentScheduleInstance[];
}
