import {AudioConferencing, BroadcastMeetingSettings, ChatInfo, Entity, ItemBody, LobbyBypassSettings, MeetingAttendanceReport, MeetingParticipants} from './index';
import {MeetingChatMode} from './meetingChatMode';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnlineMeeting extends Entity, Partial<Parsable> {
    /** Indicates whether attendees can turn on their camera. */
    allowAttendeeToEnableCamera?: boolean;
    /** Indicates whether attendees can turn on their microphone. */
    allowAttendeeToEnableMic?: boolean;
    /** Specifies who can be a presenter in a meeting. Possible values are listed in the following table. */
    allowedPresenters?: OnlineMeetingPresenters;
    /** Specifies the mode of meeting chat. */
    allowMeetingChat?: MeetingChatMode;
    /** Indicates whether Teams reactions are enabled for the meeting. */
    allowTeamworkReactions?: boolean;
    /** The attendance reports of an online meeting. Read-only. */
    attendanceReports?: MeetingAttendanceReport[];
    /** The content stream of the attendee report of a Microsoft Teams live event. Read-only. */
    attendeeReport?: string;
    /** The phone access (dial-in) information for an online meeting. Read-only. */
    audioConferencing?: AudioConferencing;
    /** Settings related to a live event. */
    broadcastSettings?: BroadcastMeetingSettings;
    /** The chat information associated with this online meeting. */
    chatInfo?: ChatInfo;
    /** The meeting creation time in UTC. Read-only. */
    creationDateTime?: Date;
    /** The meeting end time in UTC. */
    endDateTime?: Date;
    /** The externalId property */
    externalId?: string;
    /** Indicates if this is a Teams live event. */
    isBroadcast?: boolean;
    /** Indicates whether to announce when callers join or leave. */
    isEntryExitAnnounced?: boolean;
    /** The join information in the language and locale variant specified in the Accept-Language request HTTP header. Read-only. */
    joinInformation?: ItemBody;
    /** The join URL of the online meeting. Read-only. */
    joinWebUrl?: string;
    /** Specifies which participants can bypass the meeting   lobby. */
    lobbyBypassSettings?: LobbyBypassSettings;
    /** The participants associated with the online meeting.  This includes the organizer and the attendees. */
    participants?: MeetingParticipants;
    /** Indicates whether to record the meeting automatically. */
    recordAutomatically?: boolean;
    /** The meeting start time in UTC. */
    startDateTime?: Date;
    /** The subject of the online meeting. */
    subject?: string;
    /** The video teleconferencing ID. Read-only. */
    videoTeleconferenceId?: string;
}
