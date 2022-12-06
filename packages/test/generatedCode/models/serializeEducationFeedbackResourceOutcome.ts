import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import {EducationFeedbackResourceOutcome} from './index';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedbackResourceOutcome(writer: SerializationWriter, educationFeedbackResourceOutcome: EducationFeedbackResourceOutcome | undefined = {}) : void {
        serializeEducationOutcome(writer, educationFeedbackResourceOutcome)
            writer.writeObjectValueFromMethod("feedbackResource", educationFeedbackResourceOutcome.feedbackResource as any, serializeEducationResource);
            writer.writeEnumValue<EducationFeedbackResourceOutcomeStatus>("resourceStatus", educationFeedbackResourceOutcome.resourceStatus);
}
