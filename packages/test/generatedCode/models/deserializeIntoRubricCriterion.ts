import {deserializeIntoEducationItemBody} from './deserializeIntoEducationItemBody';
import {RubricCriterion} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricCriterion(rubricCriterion: RubricCriterion | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { rubricCriterion.description = n.getObject(deserializeIntoEducationItemBody) as any ; },
        "@odata.type": n => { rubricCriterion.odataType = n.getStringValue() as any ; },
    }
}
