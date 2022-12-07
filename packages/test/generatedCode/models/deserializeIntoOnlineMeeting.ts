import {deserializeIntoAudioConferencing} from './deserializeIntoAudioConferencing';
import {deserializeIntoBroadcastMeetingSettings} from './deserializeIntoBroadcastMeetingSettings';
import {deserializeIntoCallTranscript} from './deserializeIntoCallTranscript';
import {deserializeIntoChatInfo} from './deserializeIntoChatInfo';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoJoinMeetingIdSettings} from './deserializeIntoJoinMeetingIdSettings';
import {deserializeIntoLobbyBypassSettings} from './deserializeIntoLobbyBypassSettings';
import {deserializeIntoMeetingAttendanceReport} from './deserializeIntoMeetingAttendanceReport';
import {deserializeIntoMeetingParticipants} from './deserializeIntoMeetingParticipants';
import {deserializeIntoMeetingRegistration} from './deserializeIntoMeetingRegistration';
import {deserializeIntoVirtualAppointment} from './deserializeIntoVirtualAppointment';
import {OnlineMeeting} from './index';
import {MeetingCapabilities} from './meetingCapabilities';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeeting(onlineMeeting: OnlineMeeting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onlineMeeting),
        "allowAttendeeToEnableCamera": n => { onlineMeeting.allowAttendeeToEnableCamera = n.getBooleanValue() as any ; },
        "allowAttendeeToEnableMic": n => { onlineMeeting.allowAttendeeToEnableMic = n.getBooleanValue() as any ; },
        "allowedPresenters": n => { onlineMeeting.allowedPresenters = n.getEnumValue<OnlineMeetingPresenters>(OnlineMeetingPresenters) as any ; },
        "allowTeamworkReactions": n => { onlineMeeting.allowTeamworkReactions = n.getBooleanValue() as any ; },
        "alternativeRecording": n => { onlineMeeting.alternativeRecording = n.getStringValue() as any ; },
        "anonymizeIdentityForRoles": n => { onlineMeeting.anonymizeIdentityForRoles = n.getEnumValues<OnlineMeetingRole>(OnlineMeetingRole) as any ; },
        "attendanceReports": n => { onlineMeeting.attendanceReports = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingAttendanceReport) as any ; },
        "attendeeReport": n => { onlineMeeting.attendeeReport = n.getStringValue() as any ; },
        "audioConferencing": n => { onlineMeeting.audioConferencing = n.getObject(deserializeIntoAudioConferencing) as any ; },
        "broadcastSettings": n => { onlineMeeting.broadcastSettings = n.getObject(deserializeIntoBroadcastMeetingSettings) as any ; },
        "capabilities": n => { onlineMeeting.capabilities = n.getEnumValues<MeetingCapabilities>(MeetingCapabilities) as any ; },
        "chatInfo": n => { onlineMeeting.chatInfo = n.getObject(deserializeIntoChatInfo) as any ; },
        "creationDateTime": n => { onlineMeeting.creationDateTime = n.getDateValue() as any ; },
        "endDateTime": n => { onlineMeeting.endDateTime = n.getDateValue() as any ; },
        "externalId": n => { onlineMeeting.externalId = n.getStringValue() as any ; },
        "isBroadcast": n => { onlineMeeting.isBroadcast = n.getBooleanValue() as any ; },
        "isEntryExitAnnounced": n => { onlineMeeting.isEntryExitAnnounced = n.getBooleanValue() as any ; },
        "joinInformation": n => { onlineMeeting.joinInformation = n.getObject(deserializeIntoItemBody) as any ; },
        "joinMeetingIdSettings": n => { onlineMeeting.joinMeetingIdSettings = n.getObject(deserializeIntoJoinMeetingIdSettings) as any ; },
        "joinUrl": n => { onlineMeeting.joinUrl = n.getStringValue() as any ; },
        "joinWebUrl": n => { onlineMeeting.joinWebUrl = n.getStringValue() as any ; },
        "lobbyBypassSettings": n => { onlineMeeting.lobbyBypassSettings = n.getObject(deserializeIntoLobbyBypassSettings) as any ; },
        "meetingAttendanceReport": n => { onlineMeeting.meetingAttendanceReport = n.getObject(deserializeIntoMeetingAttendanceReport) as any ; },
        "participants": n => { onlineMeeting.participants = n.getObject(deserializeIntoMeetingParticipants) as any ; },
        "recordAutomatically": n => { onlineMeeting.recordAutomatically = n.getBooleanValue() as any ; },
        "recording": n => { onlineMeeting.recording = n.getStringValue() as any ; },
        "registration": n => { onlineMeeting.registration = n.getObject(deserializeIntoMeetingRegistration) as any ; },
        "startDateTime": n => { onlineMeeting.startDateTime = n.getDateValue() as any ; },
        "subject": n => { onlineMeeting.subject = n.getStringValue() as any ; },
        "transcripts": n => { onlineMeeting.transcripts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCallTranscript) as any ; },
        "videoTeleconferenceId": n => { onlineMeeting.videoTeleconferenceId = n.getStringValue() as any ; },
        "virtualAppointment": n => { onlineMeeting.virtualAppointment = n.getObject(deserializeIntoVirtualAppointment) as any ; },
    }
}
