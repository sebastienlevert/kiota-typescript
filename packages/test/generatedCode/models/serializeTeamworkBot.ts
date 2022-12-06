import {TeamworkBot} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkBot(writer: SerializationWriter, teamworkBot: TeamworkBot | undefined = {}) : void {
        serializeEntity(writer, teamworkBot)
}
