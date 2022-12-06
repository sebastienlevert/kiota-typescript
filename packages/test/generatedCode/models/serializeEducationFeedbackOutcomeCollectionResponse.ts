import {EducationFeedbackOutcomeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationFeedbackOutcome} from './serializeEducationFeedbackOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedbackOutcomeCollectionResponse(writer: SerializationWriter, educationFeedbackOutcomeCollectionResponse: EducationFeedbackOutcomeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationFeedbackOutcomeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationFeedbackOutcomeCollectionResponse.value as any, serializeEducationFeedbackOutcome);
}
