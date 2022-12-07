import {TeamworkOnlineMeetingInfo} from './index';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkOnlineMeetingInfo(writer: SerializationWriter, teamworkOnlineMeetingInfo: TeamworkOnlineMeetingInfo | undefined = {}) : void {
            writer.writeStringValue("calendarEventId", teamworkOnlineMeetingInfo.calendarEventId);
            writer.writeStringValue("joinWebUrl", teamworkOnlineMeetingInfo.joinWebUrl);
            writer.writeObjectValueFromMethod("organizer", teamworkOnlineMeetingInfo.organizer as any, serializeTeamworkUserIdentity);
}
