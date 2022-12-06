import {EducationRubricOutcome} from './index';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {serializeRubricQualityFeedbackModel} from './serializeRubricQualityFeedbackModel';
import {serializeRubricQualitySelectedColumnModel} from './serializeRubricQualitySelectedColumnModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRubricOutcome(writer: SerializationWriter, educationRubricOutcome: EducationRubricOutcome | undefined = {}) : void {
        serializeEducationOutcome(writer, educationRubricOutcome)
            writer.writeCollectionOfObjectValuesFromMethod("publishedRubricQualityFeedback", educationRubricOutcome.publishedRubricQualityFeedback as any, serializeRubricQualityFeedbackModel);
            writer.writeCollectionOfObjectValuesFromMethod("publishedRubricQualitySelectedLevels", educationRubricOutcome.publishedRubricQualitySelectedLevels as any, serializeRubricQualitySelectedColumnModel);
            writer.writeCollectionOfObjectValuesFromMethod("rubricQualityFeedback", educationRubricOutcome.rubricQualityFeedback as any, serializeRubricQualityFeedbackModel);
            writer.writeCollectionOfObjectValuesFromMethod("rubricQualitySelectedLevels", educationRubricOutcome.rubricQualitySelectedLevels as any, serializeRubricQualitySelectedColumnModel);
}
