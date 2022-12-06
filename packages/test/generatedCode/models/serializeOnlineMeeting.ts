import {OnlineMeeting} from './index';
import {MeetingChatMode} from './meetingChatMode';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {serializeAudioConferencing} from './serializeAudioConferencing';
import {serializeBroadcastMeetingSettings} from './serializeBroadcastMeetingSettings';
import {serializeChatInfo} from './serializeChatInfo';
import {serializeEntity} from './serializeEntity';
import {serializeItemBody} from './serializeItemBody';
import {serializeLobbyBypassSettings} from './serializeLobbyBypassSettings';
import {serializeMeetingAttendanceReport} from './serializeMeetingAttendanceReport';
import {serializeMeetingParticipants} from './serializeMeetingParticipants';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnlineMeeting(writer: SerializationWriter, onlineMeeting: OnlineMeeting | undefined = {}) : void {
        serializeEntity(writer, onlineMeeting)
            writer.writeBooleanValue("allowAttendeeToEnableCamera", onlineMeeting.allowAttendeeToEnableCamera);
            writer.writeBooleanValue("allowAttendeeToEnableMic", onlineMeeting.allowAttendeeToEnableMic);
            writer.writeEnumValue<OnlineMeetingPresenters>("allowedPresenters", onlineMeeting.allowedPresenters);
            writer.writeEnumValue<MeetingChatMode>("allowMeetingChat", onlineMeeting.allowMeetingChat);
            writer.writeBooleanValue("allowTeamworkReactions", onlineMeeting.allowTeamworkReactions);
            writer.writeCollectionOfObjectValuesFromMethod("attendanceReports", onlineMeeting.attendanceReports as any, serializeMeetingAttendanceReport);
            writer.writeStringValue("attendeeReport", onlineMeeting.attendeeReport);
            writer.writeObjectValueFromMethod("audioConferencing", onlineMeeting.audioConferencing as any, serializeAudioConferencing);
            writer.writeObjectValueFromMethod("broadcastSettings", onlineMeeting.broadcastSettings as any, serializeBroadcastMeetingSettings);
            writer.writeObjectValueFromMethod("chatInfo", onlineMeeting.chatInfo as any, serializeChatInfo);
            writer.writeDateValue("creationDateTime", onlineMeeting.creationDateTime);
            writer.writeDateValue("endDateTime", onlineMeeting.endDateTime);
            writer.writeStringValue("externalId", onlineMeeting.externalId);
            writer.writeBooleanValue("isBroadcast", onlineMeeting.isBroadcast);
            writer.writeBooleanValue("isEntryExitAnnounced", onlineMeeting.isEntryExitAnnounced);
            writer.writeObjectValueFromMethod("joinInformation", onlineMeeting.joinInformation as any, serializeItemBody);
            writer.writeStringValue("joinWebUrl", onlineMeeting.joinWebUrl);
            writer.writeObjectValueFromMethod("lobbyBypassSettings", onlineMeeting.lobbyBypassSettings as any, serializeLobbyBypassSettings);
            writer.writeObjectValueFromMethod("participants", onlineMeeting.participants as any, serializeMeetingParticipants);
            writer.writeBooleanValue("recordAutomatically", onlineMeeting.recordAutomatically);
            writer.writeDateValue("startDateTime", onlineMeeting.startDateTime);
            writer.writeStringValue("subject", onlineMeeting.subject);
            writer.writeStringValue("videoTeleconferenceId", onlineMeeting.videoTeleconferenceId);
}
