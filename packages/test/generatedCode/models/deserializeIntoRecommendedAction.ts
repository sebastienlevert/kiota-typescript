import {RecommendedAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecommendedAction(recommendedAction: RecommendedAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "actionWebUrl": n => { recommendedAction.actionWebUrl = n.getStringValue() as any ; },
        "@odata.type": n => { recommendedAction.odataType = n.getStringValue() as any ; },
        "potentialScoreImpact": n => { recommendedAction.potentialScoreImpact = n.getNumberValue() as any ; },
        "title": n => { recommendedAction.title = n.getStringValue() as any ; },
    }
}
