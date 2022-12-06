import {BaseCollectionPaginationCountResponse, UnifiedRoleAssignmentScheduleInstance} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleAssignmentScheduleInstance[];
}
