import {BaseCollectionPaginationCountResponse, UnifiedRoleAssignmentScheduleRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentScheduleRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleAssignmentScheduleRequest[];
}
