import {EducationAssignmentGradeType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGradeType(writer: SerializationWriter, educationAssignmentGradeType: EducationAssignmentGradeType | undefined = {}) : void {
            writer.writeStringValue("@odata.type", educationAssignmentGradeType.odataType);
}
