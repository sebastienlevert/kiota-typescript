import {EducationExternalSource} from './educationExternalSource';
import {EducationClass} from './index';
import {serializeEducationAssignment} from './serializeEducationAssignment';
import {serializeEducationAssignmentDefaults} from './serializeEducationAssignmentDefaults';
import {serializeEducationAssignmentSettings} from './serializeEducationAssignmentSettings';
import {serializeEducationCategory} from './serializeEducationCategory';
import {serializeEducationCourse} from './serializeEducationCourse';
import {serializeEducationSchool} from './serializeEducationSchool';
import {serializeEducationTerm} from './serializeEducationTerm';
import {serializeEducationUser} from './serializeEducationUser';
import {serializeEntity} from './serializeEntity';
import {serializeGroup} from './serializeGroup';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationClass(writer: SerializationWriter, educationClass: EducationClass | undefined = {}) : void {
        serializeEntity(writer, educationClass)
            writer.writeCollectionOfObjectValuesFromMethod("assignmentCategories", educationClass.assignmentCategories as any, serializeEducationCategory);
            writer.writeObjectValueFromMethod("assignmentDefaults", educationClass.assignmentDefaults as any, serializeEducationAssignmentDefaults);
            writer.writeCollectionOfObjectValuesFromMethod("assignments", educationClass.assignments as any, serializeEducationAssignment);
            writer.writeObjectValueFromMethod("assignmentSettings", educationClass.assignmentSettings as any, serializeEducationAssignmentSettings);
            writer.writeStringValue("classCode", educationClass.classCode);
            writer.writeObjectValueFromMethod("course", educationClass.course as any, serializeEducationCourse);
            writer.writeObjectValueFromMethod("createdBy", educationClass.createdBy as any, serializeIdentitySet);
            writer.writeStringValue("description", educationClass.description);
            writer.writeStringValue("displayName", educationClass.displayName);
            writer.writeStringValue("externalId", educationClass.externalId);
            writer.writeStringValue("externalName", educationClass.externalName);
            writer.writeEnumValue<EducationExternalSource>("externalSource", educationClass.externalSource);
            writer.writeStringValue("externalSourceDetail", educationClass.externalSourceDetail);
            writer.writeStringValue("grade", educationClass.grade);
            writer.writeObjectValueFromMethod("group", educationClass.group as any, serializeGroup);
            writer.writeStringValue("mailNickname", educationClass.mailNickname);
            writer.writeCollectionOfObjectValuesFromMethod("members", educationClass.members as any, serializeEducationUser);
            writer.writeCollectionOfObjectValuesFromMethod("schools", educationClass.schools as any, serializeEducationSchool);
            writer.writeCollectionOfObjectValuesFromMethod("teachers", educationClass.teachers as any, serializeEducationUser);
            writer.writeObjectValueFromMethod("term", educationClass.term as any, serializeEducationTerm);
}
