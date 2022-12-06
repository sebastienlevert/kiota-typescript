import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamworkBot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkBot(teamworkBot: TeamworkBot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkBot),
    }
}
