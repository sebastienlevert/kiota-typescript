import {deserializeIntoEducationFeedback} from './deserializeIntoEducationFeedback';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {EducationFeedbackOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedbackOutcome(educationFeedbackOutcome: EducationFeedbackOutcome | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationFeedbackOutcome),
        "feedback": n => { educationFeedbackOutcome.feedback = n.getObject(deserializeIntoEducationFeedback) as any ; },
        "publishedFeedback": n => { educationFeedbackOutcome.publishedFeedback = n.getObject(deserializeIntoEducationFeedback) as any ; },
    }
}
