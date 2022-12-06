import {EducationCourse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationCourse(educationCourse: EducationCourse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "courseNumber": n => { educationCourse.courseNumber = n.getStringValue() as any ; },
        "description": n => { educationCourse.description = n.getStringValue() as any ; },
        "displayName": n => { educationCourse.displayName = n.getStringValue() as any ; },
        "externalId": n => { educationCourse.externalId = n.getStringValue() as any ; },
        "@odata.type": n => { educationCourse.odataType = n.getStringValue() as any ; },
        "subject": n => { educationCourse.subject = n.getStringValue() as any ; },
    }
}
