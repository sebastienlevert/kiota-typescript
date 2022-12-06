import {deserializeIntoEducationAssignmentGradeType} from './deserializeIntoEducationAssignmentGradeType';
import {EducationAssignmentPointsGradeType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentPointsGradeType(educationAssignmentPointsGradeType: EducationAssignmentPointsGradeType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationAssignmentGradeType(educationAssignmentPointsGradeType),
        "maxPoints": n => { educationAssignmentPointsGradeType.maxPoints = n.getNumberValue() as any ; },
    }
}
