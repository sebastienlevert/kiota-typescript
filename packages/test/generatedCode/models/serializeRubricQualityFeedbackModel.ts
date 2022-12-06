import {RubricQualityFeedbackModel} from './index';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQualityFeedbackModel(writer: SerializationWriter, rubricQualityFeedbackModel: RubricQualityFeedbackModel | undefined = {}) : void {
            writer.writeObjectValueFromMethod("feedback", rubricQualityFeedbackModel.feedback as any, serializeEducationItemBody);
            writer.writeStringValue("@odata.type", rubricQualityFeedbackModel.odataType);
            writer.writeStringValue("qualityId", rubricQualityFeedbackModel.qualityId);
}
