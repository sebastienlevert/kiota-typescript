import {deserializeIntoEducationItemBody} from './deserializeIntoEducationItemBody';
import {deserializeIntoRubricCriterion} from './deserializeIntoRubricCriterion';
import {RubricQuality} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQuality(rubricQuality: RubricQuality | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { rubricQuality.criteria = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRubricCriterion) as any ; },
        "description": n => { rubricQuality.description = n.getObject(deserializeIntoEducationItemBody) as any ; },
        "displayName": n => { rubricQuality.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { rubricQuality.odataType = n.getStringValue() as any ; },
        "qualityId": n => { rubricQuality.qualityId = n.getStringValue() as any ; },
        "weight": n => { rubricQuality.weight = n.getNumberValue() as any ; },
    }
}
