import {deserializeIntoEducationAssignmentGradeType} from './deserializeIntoEducationAssignmentGradeType';
import {deserializeIntoEducationItemBody} from './deserializeIntoEducationItemBody';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoRubricLevel} from './deserializeIntoRubricLevel';
import {deserializeIntoRubricQuality} from './deserializeIntoRubricQuality';
import {EducationRubric} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRubric(educationRubric: EducationRubric | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationRubric),
        "createdBy": n => { educationRubric.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { educationRubric.createdDateTime = n.getDateValue() as any ; },
        "description": n => { educationRubric.description = n.getObject(deserializeIntoEducationItemBody) as any ; },
        "displayName": n => { educationRubric.displayName = n.getStringValue() as any ; },
        "grading": n => { educationRubric.grading = n.getObject(deserializeIntoEducationAssignmentGradeType) as any ; },
        "lastModifiedBy": n => { educationRubric.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { educationRubric.lastModifiedDateTime = n.getDateValue() as any ; },
        "levels": n => { educationRubric.levels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricLevel) as any ; },
        "qualities": n => { educationRubric.qualities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricQuality) as any ; },
    }
}
