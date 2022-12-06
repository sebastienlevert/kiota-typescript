import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TeamworkTagMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkTagMember(teamworkTagMember: TeamworkTagMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamworkTagMember),
        "displayName": n => { teamworkTagMember.displayName = n.getStringValue() as any ; },
        "tenantId": n => { teamworkTagMember.tenantId = n.getStringValue() as any ; },
        "userId": n => { teamworkTagMember.userId = n.getStringValue() as any ; },
    }
}
