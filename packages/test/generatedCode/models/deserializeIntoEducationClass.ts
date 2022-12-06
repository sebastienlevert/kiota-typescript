import {deserializeIntoEducationAssignment} from './deserializeIntoEducationAssignment';
import {deserializeIntoEducationAssignmentDefaults} from './deserializeIntoEducationAssignmentDefaults';
import {deserializeIntoEducationAssignmentSettings} from './deserializeIntoEducationAssignmentSettings';
import {deserializeIntoEducationCategory} from './deserializeIntoEducationCategory';
import {deserializeIntoEducationCourse} from './deserializeIntoEducationCourse';
import {deserializeIntoEducationSchool} from './deserializeIntoEducationSchool';
import {deserializeIntoEducationTerm} from './deserializeIntoEducationTerm';
import {deserializeIntoEducationUser} from './deserializeIntoEducationUser';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoGroup} from './deserializeIntoGroup';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EducationExternalSource} from './educationExternalSource';
import {EducationClass} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationClass(educationClass: EducationClass | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationClass),
        "assignmentCategories": n => { educationClass.assignmentCategories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationCategory) as any ; },
        "assignmentDefaults": n => { educationClass.assignmentDefaults = n.getObject(deserializeIntoEducationAssignmentDefaults) as any ; },
        "assignments": n => { educationClass.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationAssignment) as any ; },
        "assignmentSettings": n => { educationClass.assignmentSettings = n.getObject(deserializeIntoEducationAssignmentSettings) as any ; },
        "classCode": n => { educationClass.classCode = n.getStringValue() as any ; },
        "course": n => { educationClass.course = n.getObject(deserializeIntoEducationCourse) as any ; },
        "createdBy": n => { educationClass.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "description": n => { educationClass.description = n.getStringValue() as any ; },
        "displayName": n => { educationClass.displayName = n.getStringValue() as any ; },
        "externalId": n => { educationClass.externalId = n.getStringValue() as any ; },
        "externalName": n => { educationClass.externalName = n.getStringValue() as any ; },
        "externalSource": n => { educationClass.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource) as any ; },
        "externalSourceDetail": n => { educationClass.externalSourceDetail = n.getStringValue() as any ; },
        "grade": n => { educationClass.grade = n.getStringValue() as any ; },
        "group": n => { educationClass.group = n.getObject(deserializeIntoGroup) as any ; },
        "mailNickname": n => { educationClass.mailNickname = n.getStringValue() as any ; },
        "members": n => { educationClass.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationUser) as any ; },
        "schools": n => { educationClass.schools = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationSchool) as any ; },
        "teachers": n => { educationClass.teachers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationUser) as any ; },
        "term": n => { educationClass.term = n.getObject(deserializeIntoEducationTerm) as any ; },
    }
}
