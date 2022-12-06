import {EducationTeacher} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationTeacher(educationTeacher: EducationTeacher | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "externalId": n => { educationTeacher.externalId = n.getStringValue() as any ; },
        "@odata.type": n => { educationTeacher.odataType = n.getStringValue() as any ; },
        "teacherNumber": n => { educationTeacher.teacherNumber = n.getStringValue() as any ; },
    }
}
