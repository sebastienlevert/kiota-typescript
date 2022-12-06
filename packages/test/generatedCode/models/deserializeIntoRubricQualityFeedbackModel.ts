import {deserializeIntoEducationItemBody} from './deserializeIntoEducationItemBody';
import {RubricQualityFeedbackModel} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualityFeedbackModel(rubricQualityFeedbackModel: RubricQualityFeedbackModel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "feedback": n => { rubricQualityFeedbackModel.feedback = n.getObject(deserializeIntoEducationItemBody) as any ; },
        "@odata.type": n => { rubricQualityFeedbackModel.odataType = n.getStringValue() as any ; },
        "qualityId": n => { rubricQualityFeedbackModel.qualityId = n.getStringValue() as any ; },
    }
}
