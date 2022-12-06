import {BaseCollectionPaginationCountResponse, EnrollmentConfigurationAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentConfigurationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EnrollmentConfigurationAssignment[];
}
