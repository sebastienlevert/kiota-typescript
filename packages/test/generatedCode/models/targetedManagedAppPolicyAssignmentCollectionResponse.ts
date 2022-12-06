import {BaseCollectionPaginationCountResponse, TargetedManagedAppPolicyAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppPolicyAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TargetedManagedAppPolicyAssignment[];
}
