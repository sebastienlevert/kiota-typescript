import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignmentDefaults} from './index';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentDefaults(educationAssignmentDefaults: EducationAssignmentDefaults | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignmentDefaults),
        "addedStudentAction": n => { educationAssignmentDefaults.addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction) as any ; },
        "addToCalendarAction": n => { educationAssignmentDefaults.addToCalendarAction = n.getEnumValue<EducationAddToCalendarOptions>(EducationAddToCalendarOptions) as any ; },
        "dueTime": n => { educationAssignmentDefaults.dueTime = n.getTimeOnlyValue() as any ; },
        "notificationChannelUrl": n => { educationAssignmentDefaults.notificationChannelUrl = n.getStringValue() as any ; },
    }
}
