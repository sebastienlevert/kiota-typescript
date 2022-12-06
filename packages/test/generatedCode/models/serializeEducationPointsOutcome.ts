import {EducationPointsOutcome} from './index';
import {serializeEducationAssignmentPointsGrade} from './serializeEducationAssignmentPointsGrade';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationPointsOutcome(writer: SerializationWriter, educationPointsOutcome: EducationPointsOutcome | undefined = {}) : void {
        serializeEducationOutcome(writer, educationPointsOutcome)
            writer.writeObjectValueFromMethod("points", educationPointsOutcome.points as any, serializeEducationAssignmentPointsGrade);
            writer.writeObjectValueFromMethod("publishedPoints", educationPointsOutcome.publishedPoints as any, serializeEducationAssignmentPointsGrade);
}
