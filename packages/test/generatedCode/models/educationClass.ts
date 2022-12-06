import {EducationExternalSource} from './educationExternalSource';
import {EducationAssignment, EducationAssignmentDefaults, EducationAssignmentSettings, EducationCategory, EducationCourse, EducationSchool, EducationTerm, EducationUser, Entity, Group, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationClass extends Entity, Partial<Parsable> {
    /** All categories associated with this class. Nullable. */
    assignmentCategories?: EducationCategory[];
    /** Specifies class-level defaults respected by new assignments created in the class. */
    assignmentDefaults?: EducationAssignmentDefaults;
    /** All assignments associated with this class. Nullable. */
    assignments?: EducationAssignment[];
    /** Specifies class-level assignments settings. */
    assignmentSettings?: EducationAssignmentSettings;
    /** Class code used by the school to identify the class. */
    classCode?: string;
    /** The course property */
    course?: EducationCourse;
    /** Entity who created the class */
    createdBy?: IdentitySet;
    /** Description of the class. */
    description?: string;
    /** Name of the class. */
    displayName?: string;
    /** ID of the class from the syncing system. */
    externalId?: string;
    /** Name of the class in the syncing system. */
    externalName?: string;
    /** How this class was created. Possible values are: sis, manual. */
    externalSource?: EducationExternalSource;
    /** The name of the external source this resources was generated from. */
    externalSourceDetail?: string;
    /** Grade level of the class. */
    grade?: string;
    /** The underlying Microsoft 365 group object. */
    group?: Group;
    /** Mail name for sending email to all members, if this is enabled. */
    mailNickname?: string;
    /** All users in the class. Nullable. */
    members?: EducationUser[];
    /** All schools that this class is associated with. Nullable. */
    schools?: EducationSchool[];
    /** All teachers in the class. Nullable. */
    teachers?: EducationUser[];
    /** Term for this class. */
    term?: EducationTerm;
}
