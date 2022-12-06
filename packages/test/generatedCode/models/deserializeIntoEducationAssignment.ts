import {deserializeIntoEducationAssignmentGradeType} from './deserializeIntoEducationAssignmentGradeType';
import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {deserializeIntoEducationAssignmentResource} from './deserializeIntoEducationAssignmentResource';
import {deserializeIntoEducationCategory} from './deserializeIntoEducationCategory';
import {deserializeIntoEducationItemBody} from './deserializeIntoEducationItemBody';
import {deserializeIntoEducationRubric} from './deserializeIntoEducationRubric';
import {deserializeIntoEducationSubmission} from './deserializeIntoEducationSubmission';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignmentStatus} from './educationAssignmentStatus';
import {EducationAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignment(educationAssignment: EducationAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignment),
        "addedStudentAction": n => { educationAssignment.addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction) as any ; },
        "addToCalendarAction": n => { educationAssignment.addToCalendarAction = n.getEnumValue<EducationAddToCalendarOptions>(EducationAddToCalendarOptions) as any ; },
        "allowLateSubmissions": n => { educationAssignment.allowLateSubmissions = n.getBooleanValue() as any ; },
        "allowStudentsToAddResourcesToSubmission": n => { educationAssignment.allowStudentsToAddResourcesToSubmission = n.getBooleanValue() as any ; },
        "assignDateTime": n => { educationAssignment.assignDateTime = n.getDateValue() as any ; },
        "assignedDateTime": n => { educationAssignment.assignedDateTime = n.getDateValue() as any ; },
        "assignTo": n => { educationAssignment.assignTo = n.getObject(deserializeIntoEducationAssignmentRecipient) as any ; },
        "categories": n => { educationAssignment.categories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationCategory) as any ; },
        "classId": n => { educationAssignment.classId = n.getStringValue() as any ; },
        "closeDateTime": n => { educationAssignment.closeDateTime = n.getDateValue() as any ; },
        "createdBy": n => { educationAssignment.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { educationAssignment.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { educationAssignment.displayName = n.getStringValue() as any ; },
        "dueDateTime": n => { educationAssignment.dueDateTime = n.getDateValue() as any ; },
        "feedbackResourcesFolderUrl": n => { educationAssignment.feedbackResourcesFolderUrl = n.getStringValue() as any ; },
        "grading": n => { educationAssignment.grading = n.getObject(deserializeIntoEducationAssignmentGradeType) as any ; },
        "instructions": n => { educationAssignment.instructions = n.getObject(deserializeIntoEducationItemBody) as any ; },
        "lastModifiedBy": n => { educationAssignment.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { educationAssignment.lastModifiedDateTime = n.getDateValue() as any ; },
        "notificationChannelUrl": n => { educationAssignment.notificationChannelUrl = n.getStringValue() as any ; },
        "resources": n => { educationAssignment.resources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationAssignmentResource) as any ; },
        "resourcesFolderUrl": n => { educationAssignment.resourcesFolderUrl = n.getStringValue() as any ; },
        "rubric": n => { educationAssignment.rubric = n.getObject(deserializeIntoEducationRubric) as any ; },
        "status": n => { educationAssignment.status = n.getEnumValue<EducationAssignmentStatus>(EducationAssignmentStatus) as any ; },
        "submissions": n => { educationAssignment.submissions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSubmission) as any ; },
        "webUrl": n => { educationAssignment.webUrl = n.getStringValue() as any ; },
    }
}
