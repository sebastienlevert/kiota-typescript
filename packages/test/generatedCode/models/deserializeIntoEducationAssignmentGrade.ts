import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EducationAssignmentGrade} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGrade(educationAssignmentGrade: EducationAssignmentGrade | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "gradedBy": n => { educationAssignmentGrade.gradedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "gradedDateTime": n => { educationAssignmentGrade.gradedDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { educationAssignmentGrade.odataType = n.getStringValue() as any ; },
    }
}
