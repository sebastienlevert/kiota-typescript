import {BaseCollectionPaginationCountResponse, EducationFeedbackResourceOutcome} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedbackResourceOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationFeedbackResourceOutcome[];
}
