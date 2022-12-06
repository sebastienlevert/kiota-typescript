import {BaseCollectionPaginationCountResponse, EducationFeedbackOutcome} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedbackOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationFeedbackOutcome[];
}
