import {RubricLevel} from './index';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricLevel(writer: SerializationWriter, rubricLevel: RubricLevel | undefined = {}) : void {
            writer.writeObjectValueFromMethod("description", rubricLevel.description as any, serializeEducationItemBody);
            writer.writeStringValue("displayName", rubricLevel.displayName);
            writer.writeObjectValueFromMethod("grading", rubricLevel.grading as any, serializeEducationAssignmentGradeType);
            writer.writeStringValue("levelId", rubricLevel.levelId);
            writer.writeStringValue("@odata.type", rubricLevel.odataType);
}
