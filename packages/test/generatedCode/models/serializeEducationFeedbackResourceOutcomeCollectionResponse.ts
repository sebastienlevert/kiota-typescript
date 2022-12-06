import {EducationFeedbackResourceOutcomeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationFeedbackResourceOutcome} from './serializeEducationFeedbackResourceOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedbackResourceOutcomeCollectionResponse(writer: SerializationWriter, educationFeedbackResourceOutcomeCollectionResponse: EducationFeedbackResourceOutcomeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationFeedbackResourceOutcomeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", educationFeedbackResourceOutcomeCollectionResponse.value as any, serializeEducationFeedbackResourceOutcome);
}
