import {BaseCollectionPaginationCountResponse, TermsAndConditionsAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TermsAndConditionsAssignment[];
}
