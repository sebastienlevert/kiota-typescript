import {deserializeIntoAudioConferencing} from './deserializeIntoAudioConferencing';
import {deserializeIntoBroadcastMeetingSettings} from './deserializeIntoBroadcastMeetingSettings';
import {deserializeIntoChatInfo} from './deserializeIntoChatInfo';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoLobbyBypassSettings} from './deserializeIntoLobbyBypassSettings';
import {deserializeIntoMeetingAttendanceReport} from './deserializeIntoMeetingAttendanceReport';
import {deserializeIntoMeetingParticipants} from './deserializeIntoMeetingParticipants';
import {OnlineMeeting} from './index';
import {MeetingChatMode} from './meetingChatMode';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeeting(onlineMeeting: OnlineMeeting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onlineMeeting),
        "allowAttendeeToEnableCamera": n => { onlineMeeting.allowAttendeeToEnableCamera = n.getBooleanValue() as any ; },
        "allowAttendeeToEnableMic": n => { onlineMeeting.allowAttendeeToEnableMic = n.getBooleanValue() as any ; },
        "allowedPresenters": n => { onlineMeeting.allowedPresenters = n.getEnumValue<OnlineMeetingPresenters>(OnlineMeetingPresenters) as any ; },
        "allowMeetingChat": n => { onlineMeeting.allowMeetingChat = n.getEnumValue<MeetingChatMode>(MeetingChatMode) as any ; },
        "allowTeamworkReactions": n => { onlineMeeting.allowTeamworkReactions = n.getBooleanValue() as any ; },
        "attendanceReports": n => { onlineMeeting.attendanceReports = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingAttendanceReport) as any ; },
        "attendeeReport": n => { onlineMeeting.attendeeReport = n.getStringValue() as any ; },
        "audioConferencing": n => { onlineMeeting.audioConferencing = n.getObject(deserializeIntoAudioConferencing) as any ; },
        "broadcastSettings": n => { onlineMeeting.broadcastSettings = n.getObject(deserializeIntoBroadcastMeetingSettings) as any ; },
        "chatInfo": n => { onlineMeeting.chatInfo = n.getObject(deserializeIntoChatInfo) as any ; },
        "creationDateTime": n => { onlineMeeting.creationDateTime = n.getDateValue() as any ; },
        "endDateTime": n => { onlineMeeting.endDateTime = n.getDateValue() as any ; },
        "externalId": n => { onlineMeeting.externalId = n.getStringValue() as any ; },
        "isBroadcast": n => { onlineMeeting.isBroadcast = n.getBooleanValue() as any ; },
        "isEntryExitAnnounced": n => { onlineMeeting.isEntryExitAnnounced = n.getBooleanValue() as any ; },
        "joinInformation": n => { onlineMeeting.joinInformation = n.getObject(deserializeIntoItemBody) as any ; },
        "joinWebUrl": n => { onlineMeeting.joinWebUrl = n.getStringValue() as any ; },
        "lobbyBypassSettings": n => { onlineMeeting.lobbyBypassSettings = n.getObject(deserializeIntoLobbyBypassSettings) as any ; },
        "participants": n => { onlineMeeting.participants = n.getObject(deserializeIntoMeetingParticipants) as any ; },
        "recordAutomatically": n => { onlineMeeting.recordAutomatically = n.getBooleanValue() as any ; },
        "startDateTime": n => { onlineMeeting.startDateTime = n.getDateValue() as any ; },
        "subject": n => { onlineMeeting.subject = n.getStringValue() as any ; },
        "videoTeleconferenceId": n => { onlineMeeting.videoTeleconferenceId = n.getStringValue() as any ; },
    }
}
