import {TeamworkActivityTopic} from './index';
import {TeamworkActivityTopicSource} from './teamworkActivityTopicSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkActivityTopic(writer: SerializationWriter, teamworkActivityTopic: TeamworkActivityTopic | undefined = {}) : void {
            writer.writeStringValue("@odata.type", teamworkActivityTopic.odataType);
            writer.writeEnumValue<TeamworkActivityTopicSource>("source", teamworkActivityTopic.source);
            writer.writeStringValue("value", teamworkActivityTopic.value);
            writer.writeStringValue("webUrl", teamworkActivityTopic.webUrl);
}
