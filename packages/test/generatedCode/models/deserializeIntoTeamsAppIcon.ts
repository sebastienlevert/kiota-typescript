import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTeamworkHostedContent} from './deserializeIntoTeamworkHostedContent';
import {TeamsAppIcon} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppIcon(teamsAppIcon: TeamsAppIcon | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppIcon),
        "hostedContent": n => { teamsAppIcon.hostedContent = n.getObject(deserializeIntoTeamworkHostedContent) as any ; },
        "webUrl": n => { teamsAppIcon.webUrl = n.getStringValue() as any ; },
    }
}
