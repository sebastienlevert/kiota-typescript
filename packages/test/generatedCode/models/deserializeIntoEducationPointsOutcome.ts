import {deserializeIntoEducationAssignmentPointsGrade} from './deserializeIntoEducationAssignmentPointsGrade';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {EducationPointsOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationPointsOutcome(educationPointsOutcome: EducationPointsOutcome | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationPointsOutcome),
        "points": n => { educationPointsOutcome.points = n.getObject(deserializeIntoEducationAssignmentPointsGrade) as any ; },
        "publishedPoints": n => { educationPointsOutcome.publishedPoints = n.getObject(deserializeIntoEducationAssignmentPointsGrade) as any ; },
    }
}
