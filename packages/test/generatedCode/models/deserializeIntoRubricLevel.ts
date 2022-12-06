import {deserializeIntoEducationAssignmentGradeType} from './deserializeIntoEducationAssignmentGradeType';
import {deserializeIntoEducationItemBody} from './deserializeIntoEducationItemBody';
import {RubricLevel} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricLevel(rubricLevel: RubricLevel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { rubricLevel.description = n.getObject(deserializeIntoEducationItemBody) as any ; },
        "displayName": n => { rubricLevel.displayName = n.getStringValue() as any ; },
        "grading": n => { rubricLevel.grading = n.getObject(deserializeIntoEducationAssignmentGradeType) as any ; },
        "levelId": n => { rubricLevel.levelId = n.getStringValue() as any ; },
        "@odata.type": n => { rubricLevel.odataType = n.getStringValue() as any ; },
    }
}
