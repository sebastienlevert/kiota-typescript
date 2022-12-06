import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import {EducationOutcome, EducationResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedbackResourceOutcome extends EducationOutcome, Partial<Parsable> {
    /** The actual feedback resource. */
    feedbackResource?: EducationResource;
    /** The status of the feedback resource. The possible values are: notPublished, pendingPublish, published, failedPublish, unknownFutureValue. */
    resourceStatus?: EducationFeedbackResourceOutcomeStatus;
}
