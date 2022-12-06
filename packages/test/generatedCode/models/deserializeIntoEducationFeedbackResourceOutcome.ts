import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import {EducationFeedbackResourceOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedbackResourceOutcome(educationFeedbackResourceOutcome: EducationFeedbackResourceOutcome | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationFeedbackResourceOutcome),
        "feedbackResource": n => { educationFeedbackResourceOutcome.feedbackResource = n.getObject(deserializeIntoEducationResource) as any ; },
        "resourceStatus": n => { educationFeedbackResourceOutcome.resourceStatus = n.getEnumValue<EducationFeedbackResourceOutcomeStatus>(EducationFeedbackResourceOutcomeStatus) as any ; },
    }
}
