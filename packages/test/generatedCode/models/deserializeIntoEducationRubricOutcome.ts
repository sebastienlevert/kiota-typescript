import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {deserializeIntoRubricQualityFeedbackModel} from './deserializeIntoRubricQualityFeedbackModel';
import {deserializeIntoRubricQualitySelectedColumnModel} from './deserializeIntoRubricQualitySelectedColumnModel';
import {EducationRubricOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRubricOutcome(educationRubricOutcome: EducationRubricOutcome | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationRubricOutcome),
        "publishedRubricQualityFeedback": n => { educationRubricOutcome.publishedRubricQualityFeedback = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQualityFeedbackModel) as any ; },
        "publishedRubricQualitySelectedLevels": n => { educationRubricOutcome.publishedRubricQualitySelectedLevels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQualitySelectedColumnModel) as any ; },
        "rubricQualityFeedback": n => { educationRubricOutcome.rubricQualityFeedback = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQualityFeedbackModel) as any ; },
        "rubricQualitySelectedLevels": n => { educationRubricOutcome.rubricQualitySelectedLevels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQualitySelectedColumnModel) as any ; },
    }
}
