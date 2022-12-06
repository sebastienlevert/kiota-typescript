import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignmentStatus} from './educationAssignmentStatus';
import {EducationAssignmentGradeType, EducationAssignmentRecipient, EducationAssignmentResource, EducationCategory, EducationItemBody, EducationRubric, EducationSubmission, Entity, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignment extends Entity, Partial<Parsable> {
    /** Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none. Supported values are: none, assignIfOpen. For example, a teacher can use assignIfOpen to indicate that an assignment should be assigned to any new student who joins the class while the assignment is still open, and none to indicate that an assignment should not be assigned to new students. */
    addedStudentAction?: EducationAddedStudentAction;
    /** Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none. */
    addToCalendarAction?: EducationAddToCalendarOptions;
    /** Identifies whether students can submit after the due date. If this property isn't specified during create, it defaults to true. */
    allowLateSubmissions?: boolean;
    /** Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher. */
    allowStudentsToAddResourcesToSubmission?: boolean;
    /** The date when the assignment should become active.  If in the future, the assignment isn't shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    assignDateTime?: Date;
    /** The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    assignedDateTime?: Date;
    /** Which users, or whole class should receive a submission object once the assignment is published. */
    assignTo?: EducationAssignmentRecipient;
    /** When set, enables users to easily find assignments of a given type.  Read-only. Nullable. */
    categories?: EducationCategory[];
    /** Class which this assignment belongs. */
    classId?: string;
    /** Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    closeDateTime?: Date;
    /** Who created the assignment. */
    createdBy?: IdentitySet;
    /** Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** Name of the assignment. */
    displayName?: string;
    /** Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    dueDateTime?: Date;
    /** Folder URL where all the feedback file resources for this assignment are stored. */
    feedbackResourcesFolderUrl?: string;
    /** How the assignment will be graded. */
    grading?: EducationAssignmentGradeType;
    /** Instructions for the assignment.  This along with the display name tell the student what to do. */
    instructions?: EducationItemBody;
    /** Who last modified the assignment. */
    lastModifiedBy?: IdentitySet;
    /** Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    lastModifiedDateTime?: Date;
    /** Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl isn't allowed after the assignment has been published. */
    notificationChannelUrl?: string;
    /** Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable. */
    resources?: EducationAssignmentResource[];
    /** Folder URL where all the file resources for this assignment are stored. */
    resourcesFolderUrl?: string;
    /** When set, the grading rubric attached to this assignment. */
    rubric?: EducationRubric;
    /** Status of the Assignment.  You can't PATCH this value.  Possible values are: draft, scheduled, published, assigned. */
    status?: EducationAssignmentStatus;
    /** Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable. */
    submissions?: EducationSubmission[];
    /** The deep link URL for the given assignment. */
    webUrl?: string;
}
