import {RecommendedAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecommendedAction(writer: SerializationWriter, recommendedAction: RecommendedAction | undefined = {}) : void {
            writer.writeStringValue("actionWebUrl", recommendedAction.actionWebUrl);
            writer.writeStringValue("@odata.type", recommendedAction.odataType);
            writer.writeNumberValue("potentialScoreImpact", recommendedAction.potentialScoreImpact);
            writer.writeStringValue("title", recommendedAction.title);
}
