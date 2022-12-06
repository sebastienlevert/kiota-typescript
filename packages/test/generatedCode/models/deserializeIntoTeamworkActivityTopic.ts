import {TeamworkActivityTopic} from './index';
import {TeamworkActivityTopicSource} from './teamworkActivityTopicSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkActivityTopic(teamworkActivityTopic: TeamworkActivityTopic | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { teamworkActivityTopic.odataType = n.getStringValue() as any ; },
        "source": n => { teamworkActivityTopic.source = n.getEnumValue<TeamworkActivityTopicSource>(TeamworkActivityTopicSource) as any ; },
        "value": n => { teamworkActivityTopic.value = n.getStringValue() as any ; },
        "webUrl": n => { teamworkActivityTopic.webUrl = n.getStringValue() as any ; },
    }
}
