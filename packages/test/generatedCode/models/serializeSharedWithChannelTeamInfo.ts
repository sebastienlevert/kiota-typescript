import {SharedWithChannelTeamInfo} from './index';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeTeamInfo} from './serializeTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedWithChannelTeamInfo(writer: SerializationWriter, sharedWithChannelTeamInfo: SharedWithChannelTeamInfo | undefined = {}) : void {
        serializeTeamInfo(writer, sharedWithChannelTeamInfo)
            writer.writeCollectionOfObjectValuesFromMethod("allowedMembers", sharedWithChannelTeamInfo.allowedMembers as any, serializeConversationMember);
            writer.writeBooleanValue("isHostTeam", sharedWithChannelTeamInfo.isHostTeam);
}
