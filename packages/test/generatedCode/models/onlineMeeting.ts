import {AudioConferencing, BroadcastMeetingSettings, CallTranscript, ChatInfo, Entity, ItemBody, JoinMeetingIdSettings, LobbyBypassSettings, MeetingAttendanceReport, MeetingParticipants, MeetingRegistration, VirtualAppointment} from './index';
import {MeetingCapabilities} from './meetingCapabilities';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnlineMeeting extends Entity, Partial<Parsable> {
    /** Indicates whether attendees can turn on their camera. */
    allowAttendeeToEnableCamera?: boolean;
    /** Indicates whether attendees can turn on their microphone. */
    allowAttendeeToEnableMic?: boolean;
    /** The allowedPresenters property */
    allowedPresenters?: OnlineMeetingPresenters;
    /** Indicates if Teams reactions are enabled for the meeting. */
    allowTeamworkReactions?: boolean;
    /** The content stream of the alternative recording of a Microsoft Teams live event. Read-only. */
    alternativeRecording?: string;
    /** The anonymizeIdentityForRoles property */
    anonymizeIdentityForRoles?: OnlineMeetingRole[];
    /** The attendance reports of an online meeting. Read-only. */
    attendanceReports?: MeetingAttendanceReport[];
    /** The content stream of the attendee report of a Teams live event. Read-only. */
    attendeeReport?: string;
    /** The audioConferencing property */
    audioConferencing?: AudioConferencing;
    /** The broadcastSettings property */
    broadcastSettings?: BroadcastMeetingSettings;
    /** The capabilities property */
    capabilities?: MeetingCapabilities[];
    /** The chatInfo property */
    chatInfo?: ChatInfo;
    /** The meeting creation time in UTC. Read-only. */
    creationDateTime?: Date;
    /** The meeting end time in UTC. */
    endDateTime?: Date;
    /** The external ID. A custom ID. Optional. */
    externalId?: string;
    /** Indicates whether this is a Teams live event. */
    isBroadcast?: boolean;
    /** Indicates whether to announce when callers join or leave. */
    isEntryExitAnnounced?: boolean;
    /** The joinInformation property */
    joinInformation?: ItemBody;
    /** The joinMeetingIdSettings property */
    joinMeetingIdSettings?: JoinMeetingIdSettings;
    /** The joinUrl property */
    joinUrl?: string;
    /** The join URL of the online meeting. Read-only. */
    joinWebUrl?: string;
    /** The lobbyBypassSettings property */
    lobbyBypassSettings?: LobbyBypassSettings;
    /** The meetingAttendanceReport property */
    meetingAttendanceReport?: MeetingAttendanceReport;
    /** The participants property */
    participants?: MeetingParticipants;
    /** Indicates whether to record the meeting automatically. */
    recordAutomatically?: boolean;
    /** The content stream of the recording of a Teams live event. Read-only. */
    recording?: string;
    /** The registration property */
    registration?: MeetingRegistration;
    /** The meeting start time in UTC. */
    startDateTime?: Date;
    /** The subject of the online meeting. */
    subject?: string;
    /** The transcripts of an online meeting. Read-only. */
    transcripts?: CallTranscript[];
    /** The video teleconferencing ID. Read-only. */
    videoTeleconferenceId?: string;
    /** The virtualAppointment property */
    virtualAppointment?: VirtualAppointment;
}
