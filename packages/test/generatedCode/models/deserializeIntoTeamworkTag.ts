import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTeamworkTagMember} from './deserializeIntoTeamworkTagMember';
import {TeamworkTag} from './index';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTag(teamworkTag: TeamworkTag | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkTag),
        "description": n => { teamworkTag.description = n.getStringValue() as any ; },
        "displayName": n => { teamworkTag.displayName = n.getStringValue() as any ; },
        "memberCount": n => { teamworkTag.memberCount = n.getNumberValue() as any ; },
        "members": n => { teamworkTag.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkTagMember) as any ; },
        "tagType": n => { teamworkTag.tagType = n.getEnumValue<TeamworkTagType>(TeamworkTagType) as any ; },
        "teamId": n => { teamworkTag.teamId = n.getStringValue() as any ; },
    }
}
