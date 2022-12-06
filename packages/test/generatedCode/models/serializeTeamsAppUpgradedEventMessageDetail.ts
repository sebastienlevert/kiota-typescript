import {TeamsAppUpgradedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppUpgradedEventMessageDetail(writer: SerializationWriter, teamsAppUpgradedEventMessageDetail: TeamsAppUpgradedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamsAppUpgradedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamsAppUpgradedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamsAppDisplayName", teamsAppUpgradedEventMessageDetail.teamsAppDisplayName);
            writer.writeStringValue("teamsAppId", teamsAppUpgradedEventMessageDetail.teamsAppId);
}
