import {EducationAssignmentGrade} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentGrade(writer: SerializationWriter, educationAssignmentGrade: EducationAssignmentGrade | undefined = {}) : void {
            writer.writeObjectValueFromMethod("gradedBy", educationAssignmentGrade.gradedBy as any, serializeIdentitySet);
            writer.writeDateValue("gradedDateTime", educationAssignmentGrade.gradedDateTime);
            writer.writeStringValue("@odata.type", educationAssignmentGrade.odataType);
}
