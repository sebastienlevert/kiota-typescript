import {BaseCollectionPaginationCountResponse, UnifiedRoleAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleAssignment[];
}
