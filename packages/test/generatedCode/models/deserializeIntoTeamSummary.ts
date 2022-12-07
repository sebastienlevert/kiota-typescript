import {TeamSummary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamSummary(teamSummary: TeamSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "guestsCount": n => { teamSummary.guestsCount = n.getNumberValue() as any ; },
        "membersCount": n => { teamSummary.membersCount = n.getNumberValue() as any ; },
        "ownersCount": n => { teamSummary.ownersCount = n.getNumberValue() as any ; },
    }
}
