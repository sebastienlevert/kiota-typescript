import {EducationAssignmentGradeType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentGradeType(educationAssignmentGradeType: EducationAssignmentGradeType | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { educationAssignmentGradeType.odataType = n.getStringValue() as any ; },
    }
}
