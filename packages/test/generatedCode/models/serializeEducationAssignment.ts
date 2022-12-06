import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignmentStatus} from './educationAssignmentStatus';
import {EducationAssignment} from './index';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {serializeEducationAssignmentResource} from './serializeEducationAssignmentResource';
import {serializeEducationCategory} from './serializeEducationCategory';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeEducationRubric} from './serializeEducationRubric';
import {serializeEducationSubmission} from './serializeEducationSubmission';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignment(writer: SerializationWriter, educationAssignment: EducationAssignment | undefined = {}) : void {
        serializeEntity(writer, educationAssignment)
            writer.writeEnumValue<EducationAddedStudentAction>("addedStudentAction", educationAssignment.addedStudentAction);
            writer.writeEnumValue<EducationAddToCalendarOptions>("addToCalendarAction", educationAssignment.addToCalendarAction);
            writer.writeBooleanValue("allowLateSubmissions", educationAssignment.allowLateSubmissions);
            writer.writeBooleanValue("allowStudentsToAddResourcesToSubmission", educationAssignment.allowStudentsToAddResourcesToSubmission);
            writer.writeDateValue("assignDateTime", educationAssignment.assignDateTime);
            writer.writeDateValue("assignedDateTime", educationAssignment.assignedDateTime);
            writer.writeObjectValueFromMethod("assignTo", educationAssignment.assignTo as any, serializeEducationAssignmentRecipient);
            writer.writeCollectionOfObjectValuesFromMethod("categories", educationAssignment.categories as any, serializeEducationCategory);
            writer.writeStringValue("classId", educationAssignment.classId);
            writer.writeDateValue("closeDateTime", educationAssignment.closeDateTime);
            writer.writeObjectValueFromMethod("createdBy", educationAssignment.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", educationAssignment.createdDateTime);
            writer.writeStringValue("displayName", educationAssignment.displayName);
            writer.writeDateValue("dueDateTime", educationAssignment.dueDateTime);
            writer.writeStringValue("feedbackResourcesFolderUrl", educationAssignment.feedbackResourcesFolderUrl);
            writer.writeObjectValueFromMethod("grading", educationAssignment.grading as any, serializeEducationAssignmentGradeType);
            writer.writeObjectValueFromMethod("instructions", educationAssignment.instructions as any, serializeEducationItemBody);
            writer.writeObjectValueFromMethod("lastModifiedBy", educationAssignment.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", educationAssignment.lastModifiedDateTime);
            writer.writeStringValue("notificationChannelUrl", educationAssignment.notificationChannelUrl);
            writer.writeCollectionOfObjectValuesFromMethod("resources", educationAssignment.resources as any, serializeEducationAssignmentResource);
            writer.writeStringValue("resourcesFolderUrl", educationAssignment.resourcesFolderUrl);
            writer.writeObjectValueFromMethod("rubric", educationAssignment.rubric as any, serializeEducationRubric);
            writer.writeEnumValue<EducationAssignmentStatus>("status", educationAssignment.status);
            writer.writeCollectionOfObjectValuesFromMethod("submissions", educationAssignment.submissions as any, serializeEducationSubmission);
            writer.writeStringValue("webUrl", educationAssignment.webUrl);
}
