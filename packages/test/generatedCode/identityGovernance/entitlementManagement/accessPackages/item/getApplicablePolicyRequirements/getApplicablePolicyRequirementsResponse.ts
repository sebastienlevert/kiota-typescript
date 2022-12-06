import {AccessPackageAssignmentRequestRequirements, BaseCollectionPaginationCountResponse} from '../../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetApplicablePolicyRequirementsResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AccessPackageAssignmentRequestRequirements[];
}
