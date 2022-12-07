import {TeamInfo} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTeam} from './serializeTeam';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamInfo(writer: SerializationWriter, teamInfo: TeamInfo | undefined = {}) : void {
        serializeEntity(writer, teamInfo)
            writer.writeStringValue("displayName", teamInfo.displayName);
            writer.writeObjectValueFromMethod("team", teamInfo.team as any, serializeTeam);
            writer.writeStringValue("tenantId", teamInfo.tenantId);
}
