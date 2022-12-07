import {TeamsAppIcon} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTeamworkHostedContent} from './serializeTeamworkHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppIcon(writer: SerializationWriter, teamsAppIcon: TeamsAppIcon | undefined = {}) : void {
        serializeEntity(writer, teamsAppIcon)
            writer.writeObjectValueFromMethod("hostedContent", teamsAppIcon.hostedContent as any, serializeTeamworkHostedContent);
            writer.writeStringValue("webUrl", teamsAppIcon.webUrl);
}
