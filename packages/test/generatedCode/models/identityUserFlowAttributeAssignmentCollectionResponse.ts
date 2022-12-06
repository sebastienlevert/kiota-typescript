import {BaseCollectionPaginationCountResponse, IdentityUserFlowAttributeAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IdentityUserFlowAttributeAssignment[];
}
