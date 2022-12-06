import {EducationFeedbackOutcome} from './index';
import {serializeEducationFeedback} from './serializeEducationFeedback';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedbackOutcome(writer: SerializationWriter, educationFeedbackOutcome: EducationFeedbackOutcome | undefined = {}) : void {
        serializeEducationOutcome(writer, educationFeedbackOutcome)
            writer.writeObjectValueFromMethod("feedback", educationFeedbackOutcome.feedback as any, serializeEducationFeedback);
            writer.writeObjectValueFromMethod("publishedFeedback", educationFeedbackOutcome.publishedFeedback as any, serializeEducationFeedback);
}
