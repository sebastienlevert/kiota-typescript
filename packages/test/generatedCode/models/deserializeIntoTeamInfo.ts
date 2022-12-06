import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTeam} from './deserializeIntoTeam';
import {TeamInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamInfo(teamInfo: TeamInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamInfo),
        "displayName": n => { teamInfo.displayName = n.getStringValue() as any ; },
        "team": n => { teamInfo.team = n.getObject(deserializeIntoTeam) as any ; },
        "tenantId": n => { teamInfo.tenantId = n.getStringValue() as any ; },
    }
}
