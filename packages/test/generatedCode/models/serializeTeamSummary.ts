import {TeamSummary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamSummary(writer: SerializationWriter, teamSummary: TeamSummary | undefined = {}) : void {
            writer.writeNumberValue("guestsCount", teamSummary.guestsCount);
            writer.writeNumberValue("membersCount", teamSummary.membersCount);
            writer.writeNumberValue("ownersCount", teamSummary.ownersCount);
}
