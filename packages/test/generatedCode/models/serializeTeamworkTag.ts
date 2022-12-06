import {TeamworkTag} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTeamworkTagMember} from './serializeTeamworkTagMember';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkTag(writer: SerializationWriter, teamworkTag: TeamworkTag | undefined = {}) : void {
        serializeEntity(writer, teamworkTag)
            writer.writeStringValue("description", teamworkTag.description);
            writer.writeStringValue("displayName", teamworkTag.displayName);
            writer.writeNumberValue("memberCount", teamworkTag.memberCount);
            writer.writeCollectionOfObjectValuesFromMethod("members", teamworkTag.members as any, serializeTeamworkTagMember);
            writer.writeEnumValue<TeamworkTagType>("tagType", teamworkTag.tagType);
            writer.writeStringValue("teamId", teamworkTag.teamId);
}
