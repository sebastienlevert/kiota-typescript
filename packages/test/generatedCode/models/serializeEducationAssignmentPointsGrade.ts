import {EducationAssignmentPointsGrade} from './index';
import {serializeEducationAssignmentGrade} from './serializeEducationAssignmentGrade';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentPointsGrade(writer: SerializationWriter, educationAssignmentPointsGrade: EducationAssignmentPointsGrade | undefined = {}) : void {
        serializeEducationAssignmentGrade(writer, educationAssignmentPointsGrade)
            writer.writeNumberValue("points", educationAssignmentPointsGrade.points);
}
