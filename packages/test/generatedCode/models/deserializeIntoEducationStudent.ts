import {EducationGender} from './educationGender';
import {EducationStudent} from './index';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationStudent(educationStudent: EducationStudent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "birthDate": n => { educationStudent.birthDate = n.getDateOnlyValue() as any ; },
        "externalId": n => { educationStudent.externalId = n.getStringValue() as any ; },
        "gender": n => { educationStudent.gender = n.getEnumValue<EducationGender>(EducationGender) as any ; },
        "grade": n => { educationStudent.grade = n.getStringValue() as any ; },
        "graduationYear": n => { educationStudent.graduationYear = n.getStringValue() as any ; },
        "@odata.type": n => { educationStudent.odataType = n.getStringValue() as any ; },
        "studentNumber": n => { educationStudent.studentNumber = n.getStringValue() as any ; },
    }
}
