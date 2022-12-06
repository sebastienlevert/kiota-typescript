import {BaseCollectionPaginationCountResponse, RoleAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RoleAssignment[];
}
