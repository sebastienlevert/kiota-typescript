import {TopicModelingSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTopicModelingSettings(topicModelingSettings: TopicModelingSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "dynamicallyAdjustTopicCount": n => { topicModelingSettings.dynamicallyAdjustTopicCount = n.getBooleanValue() as any ; },
        "ignoreNumbers": n => { topicModelingSettings.ignoreNumbers = n.getBooleanValue() as any ; },
        "isEnabled": n => { topicModelingSettings.isEnabled = n.getBooleanValue() as any ; },
        "@odata.type": n => { topicModelingSettings.odataType = n.getStringValue() as any ; },
        "topicCount": n => { topicModelingSettings.topicCount = n.getNumberValue() as any ; },
    }
}
