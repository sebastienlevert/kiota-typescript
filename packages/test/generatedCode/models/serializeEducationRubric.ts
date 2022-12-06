import {EducationRubric} from './index';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeRubricLevel} from './serializeRubricLevel';
import {serializeRubricQuality} from './serializeRubricQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRubric(writer: SerializationWriter, educationRubric: EducationRubric | undefined = {}) : void {
        serializeEntity(writer, educationRubric)
            writer.writeObjectValueFromMethod("createdBy", educationRubric.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", educationRubric.createdDateTime);
            writer.writeObjectValueFromMethod("description", educationRubric.description as any, serializeEducationItemBody);
            writer.writeStringValue("displayName", educationRubric.displayName);
            writer.writeObjectValueFromMethod("grading", educationRubric.grading as any, serializeEducationAssignmentGradeType);
            writer.writeObjectValueFromMethod("lastModifiedBy", educationRubric.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", educationRubric.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("levels", educationRubric.levels as any, serializeRubricLevel);
            writer.writeCollectionOfObjectValuesFromMethod("qualities", educationRubric.qualities as any, serializeRubricQuality);
}
