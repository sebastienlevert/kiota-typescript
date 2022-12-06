import {TopicModelingSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTopicModelingSettings(writer: SerializationWriter, topicModelingSettings: TopicModelingSettings | undefined = {}) : void {
            writer.writeBooleanValue("dynamicallyAdjustTopicCount", topicModelingSettings.dynamicallyAdjustTopicCount);
            writer.writeBooleanValue("ignoreNumbers", topicModelingSettings.ignoreNumbers);
            writer.writeBooleanValue("isEnabled", topicModelingSettings.isEnabled);
            writer.writeStringValue("@odata.type", topicModelingSettings.odataType);
            writer.writeNumberValue("topicCount", topicModelingSettings.topicCount);
}
