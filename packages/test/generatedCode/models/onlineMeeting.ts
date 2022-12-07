import {createAudioConferencingFromDiscriminatorValue} from './createAudioConferencingFromDiscriminatorValue';
import {createBroadcastMeetingSettingsFromDiscriminatorValue} from './createBroadcastMeetingSettingsFromDiscriminatorValue';
import {createCallTranscriptFromDiscriminatorValue} from './createCallTranscriptFromDiscriminatorValue';
import {createChatInfoFromDiscriminatorValue} from './createChatInfoFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createJoinMeetingIdSettingsFromDiscriminatorValue} from './createJoinMeetingIdSettingsFromDiscriminatorValue';
import {createLobbyBypassSettingsFromDiscriminatorValue} from './createLobbyBypassSettingsFromDiscriminatorValue';
import {createMeetingAttendanceReportFromDiscriminatorValue} from './createMeetingAttendanceReportFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from './createMeetingParticipantsFromDiscriminatorValue';
import {createMeetingRegistrationFromDiscriminatorValue} from './createMeetingRegistrationFromDiscriminatorValue';
import {createVirtualAppointmentFromDiscriminatorValue} from './createVirtualAppointmentFromDiscriminatorValue';
import {AudioConferencing, BroadcastMeetingSettings, CallTranscript, ChatInfo, Entity, ItemBody, JoinMeetingIdSettings, LobbyBypassSettings, MeetingAttendanceReport, MeetingParticipants, MeetingRegistration, VirtualAppointment} from './index';
import {MeetingCapabilities} from './meetingCapabilities';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnlineMeeting extends Entity implements Parsable {
    /** Indicates whether attendees can turn on their camera. */
    private _allowAttendeeToEnableCamera?: boolean | undefined;
    /** Indicates whether attendees can turn on their microphone. */
    private _allowAttendeeToEnableMic?: boolean | undefined;
    /** The allowedPresenters property */
    private _allowedPresenters?: OnlineMeetingPresenters | undefined;
    /** Indicates if Teams reactions are enabled for the meeting. */
    private _allowTeamworkReactions?: boolean | undefined;
    /** The content stream of the alternative recording of a Microsoft Teams live event. Read-only. */
    private _alternativeRecording?: string | undefined;
    /** The anonymizeIdentityForRoles property */
    private _anonymizeIdentityForRoles?: OnlineMeetingRole[] | undefined;
    /** The attendance reports of an online meeting. Read-only. */
    private _attendanceReports?: MeetingAttendanceReport[] | undefined;
    /** The content stream of the attendee report of a Teams live event. Read-only. */
    private _attendeeReport?: string | undefined;
    /** The audioConferencing property */
    private _audioConferencing?: AudioConferencing | undefined;
    /** The broadcastSettings property */
    private _broadcastSettings?: BroadcastMeetingSettings | undefined;
    /** The capabilities property */
    private _capabilities?: MeetingCapabilities[] | undefined;
    /** The chatInfo property */
    private _chatInfo?: ChatInfo | undefined;
    /** The meeting creation time in UTC. Read-only. */
    private _creationDateTime?: Date | undefined;
    /** The meeting end time in UTC. */
    private _endDateTime?: Date | undefined;
    /** The external ID. A custom ID. Optional. */
    private _externalId?: string | undefined;
    /** Indicates whether this is a Teams live event. */
    private _isBroadcast?: boolean | undefined;
    /** Indicates whether to announce when callers join or leave. */
    private _isEntryExitAnnounced?: boolean | undefined;
    /** The joinInformation property */
    private _joinInformation?: ItemBody | undefined;
    /** The joinMeetingIdSettings property */
    private _joinMeetingIdSettings?: JoinMeetingIdSettings | undefined;
    /** The joinUrl property */
    private _joinUrl?: string | undefined;
    /** The join URL of the online meeting. Read-only. */
    private _joinWebUrl?: string | undefined;
    /** The lobbyBypassSettings property */
    private _lobbyBypassSettings?: LobbyBypassSettings | undefined;
    /** The meetingAttendanceReport property */
    private _meetingAttendanceReport?: MeetingAttendanceReport | undefined;
    /** The participants property */
    private _participants?: MeetingParticipants | undefined;
    /** Indicates whether to record the meeting automatically. */
    private _recordAutomatically?: boolean | undefined;
    /** The content stream of the recording of a Teams live event. Read-only. */
    private _recording?: string | undefined;
    /** The registration property */
    private _registration?: MeetingRegistration | undefined;
    /** The meeting start time in UTC. */
    private _startDateTime?: Date | undefined;
    /** The subject of the online meeting. */
    private _subject?: string | undefined;
    /** The transcripts of an online meeting. Read-only. */
    private _transcripts?: CallTranscript[] | undefined;
    /** The video teleconferencing ID. Read-only. */
    private _videoTeleconferenceId?: string | undefined;
    /** The virtualAppointment property */
    private _virtualAppointment?: VirtualAppointment | undefined;
    /**
     * Gets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
     * @returns a boolean
     */
    public get allowAttendeeToEnableCamera() {
        return this._allowAttendeeToEnableCamera;
    };
    /**
     * Sets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
     * @param value Value to set for the allowAttendeeToEnableCamera property.
     */
    public set allowAttendeeToEnableCamera(value: boolean | undefined) {
        this._allowAttendeeToEnableCamera = value;
    };
    /**
     * Gets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
     * @returns a boolean
     */
    public get allowAttendeeToEnableMic() {
        return this._allowAttendeeToEnableMic;
    };
    /**
     * Sets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
     * @param value Value to set for the allowAttendeeToEnableMic property.
     */
    public set allowAttendeeToEnableMic(value: boolean | undefined) {
        this._allowAttendeeToEnableMic = value;
    };
    /**
     * Gets the allowedPresenters property value. The allowedPresenters property
     * @returns a onlineMeetingPresenters
     */
    public get allowedPresenters() {
        return this._allowedPresenters;
    };
    /**
     * Sets the allowedPresenters property value. The allowedPresenters property
     * @param value Value to set for the allowedPresenters property.
     */
    public set allowedPresenters(value: OnlineMeetingPresenters | undefined) {
        this._allowedPresenters = value;
    };
    /**
     * Gets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
     * @returns a boolean
     */
    public get allowTeamworkReactions() {
        return this._allowTeamworkReactions;
    };
    /**
     * Sets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
     * @param value Value to set for the allowTeamworkReactions property.
     */
    public set allowTeamworkReactions(value: boolean | undefined) {
        this._allowTeamworkReactions = value;
    };
    /**
     * Gets the alternativeRecording property value. The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
     * @returns a binary
     */
    public get alternativeRecording() {
        return this._alternativeRecording;
    };
    /**
     * Sets the alternativeRecording property value. The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
     * @param value Value to set for the alternativeRecording property.
     */
    public set alternativeRecording(value: string | undefined) {
        this._alternativeRecording = value;
    };
    /**
     * Gets the anonymizeIdentityForRoles property value. The anonymizeIdentityForRoles property
     * @returns a onlineMeetingRole
     */
    public get anonymizeIdentityForRoles() {
        return this._anonymizeIdentityForRoles;
    };
    /**
     * Sets the anonymizeIdentityForRoles property value. The anonymizeIdentityForRoles property
     * @param value Value to set for the anonymizeIdentityForRoles property.
     */
    public set anonymizeIdentityForRoles(value: OnlineMeetingRole[] | undefined) {
        this._anonymizeIdentityForRoles = value;
    };
    /**
     * Gets the attendanceReports property value. The attendance reports of an online meeting. Read-only.
     * @returns a meetingAttendanceReport
     */
    public get attendanceReports() {
        return this._attendanceReports;
    };
    /**
     * Sets the attendanceReports property value. The attendance reports of an online meeting. Read-only.
     * @param value Value to set for the attendanceReports property.
     */
    public set attendanceReports(value: MeetingAttendanceReport[] | undefined) {
        this._attendanceReports = value;
    };
    /**
     * Gets the attendeeReport property value. The content stream of the attendee report of a Teams live event. Read-only.
     * @returns a binary
     */
    public get attendeeReport() {
        return this._attendeeReport;
    };
    /**
     * Sets the attendeeReport property value. The content stream of the attendee report of a Teams live event. Read-only.
     * @param value Value to set for the attendeeReport property.
     */
    public set attendeeReport(value: string | undefined) {
        this._attendeeReport = value;
    };
    /**
     * Gets the audioConferencing property value. The audioConferencing property
     * @returns a audioConferencing
     */
    public get audioConferencing() {
        return this._audioConferencing;
    };
    /**
     * Sets the audioConferencing property value. The audioConferencing property
     * @param value Value to set for the audioConferencing property.
     */
    public set audioConferencing(value: AudioConferencing | undefined) {
        this._audioConferencing = value;
    };
    /**
     * Gets the broadcastSettings property value. The broadcastSettings property
     * @returns a broadcastMeetingSettings
     */
    public get broadcastSettings() {
        return this._broadcastSettings;
    };
    /**
     * Sets the broadcastSettings property value. The broadcastSettings property
     * @param value Value to set for the broadcastSettings property.
     */
    public set broadcastSettings(value: BroadcastMeetingSettings | undefined) {
        this._broadcastSettings = value;
    };
    /**
     * Gets the capabilities property value. The capabilities property
     * @returns a meetingCapabilities
     */
    public get capabilities() {
        return this._capabilities;
    };
    /**
     * Sets the capabilities property value. The capabilities property
     * @param value Value to set for the capabilities property.
     */
    public set capabilities(value: MeetingCapabilities[] | undefined) {
        this._capabilities = value;
    };
    /**
     * Gets the chatInfo property value. The chatInfo property
     * @returns a chatInfo
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Sets the chatInfo property value. The chatInfo property
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        this._chatInfo = value;
    };
    /**
     * Instantiates a new onlineMeeting and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the creationDateTime property value. The meeting creation time in UTC. Read-only.
     * @returns a Date
     */
    public get creationDateTime() {
        return this._creationDateTime;
    };
    /**
     * Sets the creationDateTime property value. The meeting creation time in UTC. Read-only.
     * @param value Value to set for the creationDateTime property.
     */
    public set creationDateTime(value: Date | undefined) {
        this._creationDateTime = value;
    };
    /**
     * Gets the endDateTime property value. The meeting end time in UTC.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The meeting end time in UTC.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Gets the externalId property value. The external ID. A custom ID. Optional.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. The external ID. A custom ID. Optional.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowAttendeeToEnableCamera": n => { this.allowAttendeeToEnableCamera = n.getBooleanValue(); },
            "allowAttendeeToEnableMic": n => { this.allowAttendeeToEnableMic = n.getBooleanValue(); },
            "allowedPresenters": n => { this.allowedPresenters = n.getEnumValue<OnlineMeetingPresenters>(OnlineMeetingPresenters); },
            "allowTeamworkReactions": n => { this.allowTeamworkReactions = n.getBooleanValue(); },
            "alternativeRecording": n => { this.alternativeRecording = n.getStringValue(); },
            "anonymizeIdentityForRoles": n => { this.anonymizeIdentityForRoles = n.getEnumValues<OnlineMeetingRole>(OnlineMeetingRole); },
            "attendanceReports": n => { this.attendanceReports = n.getCollectionOfObjectValues<MeetingAttendanceReport>(createMeetingAttendanceReportFromDiscriminatorValue); },
            "attendeeReport": n => { this.attendeeReport = n.getStringValue(); },
            "audioConferencing": n => { this.audioConferencing = n.getObjectValue<AudioConferencing>(createAudioConferencingFromDiscriminatorValue); },
            "broadcastSettings": n => { this.broadcastSettings = n.getObjectValue<BroadcastMeetingSettings>(createBroadcastMeetingSettingsFromDiscriminatorValue); },
            "capabilities": n => { this.capabilities = n.getEnumValues<MeetingCapabilities>(MeetingCapabilities); },
            "chatInfo": n => { this.chatInfo = n.getObjectValue<ChatInfo>(createChatInfoFromDiscriminatorValue); },
            "creationDateTime": n => { this.creationDateTime = n.getDateValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "isBroadcast": n => { this.isBroadcast = n.getBooleanValue(); },
            "isEntryExitAnnounced": n => { this.isEntryExitAnnounced = n.getBooleanValue(); },
            "joinInformation": n => { this.joinInformation = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "joinMeetingIdSettings": n => { this.joinMeetingIdSettings = n.getObjectValue<JoinMeetingIdSettings>(createJoinMeetingIdSettingsFromDiscriminatorValue); },
            "joinUrl": n => { this.joinUrl = n.getStringValue(); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "lobbyBypassSettings": n => { this.lobbyBypassSettings = n.getObjectValue<LobbyBypassSettings>(createLobbyBypassSettingsFromDiscriminatorValue); },
            "meetingAttendanceReport": n => { this.meetingAttendanceReport = n.getObjectValue<MeetingAttendanceReport>(createMeetingAttendanceReportFromDiscriminatorValue); },
            "participants": n => { this.participants = n.getObjectValue<MeetingParticipants>(createMeetingParticipantsFromDiscriminatorValue); },
            "recordAutomatically": n => { this.recordAutomatically = n.getBooleanValue(); },
            "recording": n => { this.recording = n.getStringValue(); },
            "registration": n => { this.registration = n.getObjectValue<MeetingRegistration>(createMeetingRegistrationFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
            "transcripts": n => { this.transcripts = n.getCollectionOfObjectValues<CallTranscript>(createCallTranscriptFromDiscriminatorValue); },
            "videoTeleconferenceId": n => { this.videoTeleconferenceId = n.getStringValue(); },
            "virtualAppointment": n => { this.virtualAppointment = n.getObjectValue<VirtualAppointment>(createVirtualAppointmentFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isBroadcast property value. Indicates whether this is a Teams live event.
     * @returns a boolean
     */
    public get isBroadcast() {
        return this._isBroadcast;
    };
    /**
     * Sets the isBroadcast property value. Indicates whether this is a Teams live event.
     * @param value Value to set for the isBroadcast property.
     */
    public set isBroadcast(value: boolean | undefined) {
        this._isBroadcast = value;
    };
    /**
     * Gets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
     * @returns a boolean
     */
    public get isEntryExitAnnounced() {
        return this._isEntryExitAnnounced;
    };
    /**
     * Sets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
     * @param value Value to set for the isEntryExitAnnounced property.
     */
    public set isEntryExitAnnounced(value: boolean | undefined) {
        this._isEntryExitAnnounced = value;
    };
    /**
     * Gets the joinInformation property value. The joinInformation property
     * @returns a itemBody
     */
    public get joinInformation() {
        return this._joinInformation;
    };
    /**
     * Sets the joinInformation property value. The joinInformation property
     * @param value Value to set for the joinInformation property.
     */
    public set joinInformation(value: ItemBody | undefined) {
        this._joinInformation = value;
    };
    /**
     * Gets the joinMeetingIdSettings property value. The joinMeetingIdSettings property
     * @returns a joinMeetingIdSettings
     */
    public get joinMeetingIdSettings() {
        return this._joinMeetingIdSettings;
    };
    /**
     * Sets the joinMeetingIdSettings property value. The joinMeetingIdSettings property
     * @param value Value to set for the joinMeetingIdSettings property.
     */
    public set joinMeetingIdSettings(value: JoinMeetingIdSettings | undefined) {
        this._joinMeetingIdSettings = value;
    };
    /**
     * Gets the joinUrl property value. The joinUrl property
     * @returns a string
     */
    public get joinUrl() {
        return this._joinUrl;
    };
    /**
     * Sets the joinUrl property value. The joinUrl property
     * @param value Value to set for the joinUrl property.
     */
    public set joinUrl(value: string | undefined) {
        this._joinUrl = value;
    };
    /**
     * Gets the joinWebUrl property value. The join URL of the online meeting. Read-only.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. The join URL of the online meeting. Read-only.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        this._joinWebUrl = value;
    };
    /**
     * Gets the lobbyBypassSettings property value. The lobbyBypassSettings property
     * @returns a lobbyBypassSettings
     */
    public get lobbyBypassSettings() {
        return this._lobbyBypassSettings;
    };
    /**
     * Sets the lobbyBypassSettings property value. The lobbyBypassSettings property
     * @param value Value to set for the lobbyBypassSettings property.
     */
    public set lobbyBypassSettings(value: LobbyBypassSettings | undefined) {
        this._lobbyBypassSettings = value;
    };
    /**
     * Gets the meetingAttendanceReport property value. The meetingAttendanceReport property
     * @returns a meetingAttendanceReport
     */
    public get meetingAttendanceReport() {
        return this._meetingAttendanceReport;
    };
    /**
     * Sets the meetingAttendanceReport property value. The meetingAttendanceReport property
     * @param value Value to set for the meetingAttendanceReport property.
     */
    public set meetingAttendanceReport(value: MeetingAttendanceReport | undefined) {
        this._meetingAttendanceReport = value;
    };
    /**
     * Gets the participants property value. The participants property
     * @returns a meetingParticipants
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants property
     * @param value Value to set for the participants property.
     */
    public set participants(value: MeetingParticipants | undefined) {
        this._participants = value;
    };
    /**
     * Gets the recordAutomatically property value. Indicates whether to record the meeting automatically.
     * @returns a boolean
     */
    public get recordAutomatically() {
        return this._recordAutomatically;
    };
    /**
     * Sets the recordAutomatically property value. Indicates whether to record the meeting automatically.
     * @param value Value to set for the recordAutomatically property.
     */
    public set recordAutomatically(value: boolean | undefined) {
        this._recordAutomatically = value;
    };
    /**
     * Gets the recording property value. The content stream of the recording of a Teams live event. Read-only.
     * @returns a binary
     */
    public get recording() {
        return this._recording;
    };
    /**
     * Sets the recording property value. The content stream of the recording of a Teams live event. Read-only.
     * @param value Value to set for the recording property.
     */
    public set recording(value: string | undefined) {
        this._recording = value;
    };
    /**
     * Gets the registration property value. The registration property
     * @returns a meetingRegistration
     */
    public get registration() {
        return this._registration;
    };
    /**
     * Sets the registration property value. The registration property
     * @param value Value to set for the registration property.
     */
    public set registration(value: MeetingRegistration | undefined) {
        this._registration = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowAttendeeToEnableCamera", this.allowAttendeeToEnableCamera);
        writer.writeBooleanValue("allowAttendeeToEnableMic", this.allowAttendeeToEnableMic);
        writer.writeEnumValue<OnlineMeetingPresenters>("allowedPresenters", this.allowedPresenters);
        writer.writeBooleanValue("allowTeamworkReactions", this.allowTeamworkReactions);
        writer.writeStringValue("alternativeRecording", this.alternativeRecording);
        this.anonymizeIdentityForRoles && writer.writeEnumValue<OnlineMeetingRole>("anonymizeIdentityForRoles", ...this.anonymizeIdentityForRoles);
        writer.writeCollectionOfObjectValues<MeetingAttendanceReport>("attendanceReports", this.attendanceReports);
        writer.writeStringValue("attendeeReport", this.attendeeReport);
        writer.writeObjectValue<AudioConferencing>("audioConferencing", this.audioConferencing);
        writer.writeObjectValue<BroadcastMeetingSettings>("broadcastSettings", this.broadcastSettings);
        this.capabilities && writer.writeEnumValue<MeetingCapabilities>("capabilities", ...this.capabilities);
        writer.writeObjectValue<ChatInfo>("chatInfo", this.chatInfo);
        writer.writeDateValue("creationDateTime", this.creationDateTime);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeBooleanValue("isBroadcast", this.isBroadcast);
        writer.writeBooleanValue("isEntryExitAnnounced", this.isEntryExitAnnounced);
        writer.writeObjectValue<ItemBody>("joinInformation", this.joinInformation);
        writer.writeObjectValue<JoinMeetingIdSettings>("joinMeetingIdSettings", this.joinMeetingIdSettings);
        writer.writeStringValue("joinUrl", this.joinUrl);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeObjectValue<LobbyBypassSettings>("lobbyBypassSettings", this.lobbyBypassSettings);
        writer.writeObjectValue<MeetingAttendanceReport>("meetingAttendanceReport", this.meetingAttendanceReport);
        writer.writeObjectValue<MeetingParticipants>("participants", this.participants);
        writer.writeBooleanValue("recordAutomatically", this.recordAutomatically);
        writer.writeStringValue("recording", this.recording);
        writer.writeObjectValue<MeetingRegistration>("registration", this.registration);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("subject", this.subject);
        writer.writeCollectionOfObjectValues<CallTranscript>("transcripts", this.transcripts);
        writer.writeStringValue("videoTeleconferenceId", this.videoTeleconferenceId);
        writer.writeObjectValue<VirtualAppointment>("virtualAppointment", this.virtualAppointment);
    };
    /**
     * Gets the startDateTime property value. The meeting start time in UTC.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The meeting start time in UTC.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the subject property value. The subject of the online meeting.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject of the online meeting.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the transcripts property value. The transcripts of an online meeting. Read-only.
     * @returns a callTranscript
     */
    public get transcripts() {
        return this._transcripts;
    };
    /**
     * Sets the transcripts property value. The transcripts of an online meeting. Read-only.
     * @param value Value to set for the transcripts property.
     */
    public set transcripts(value: CallTranscript[] | undefined) {
        this._transcripts = value;
    };
    /**
     * Gets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
     * @returns a string
     */
    public get videoTeleconferenceId() {
        return this._videoTeleconferenceId;
    };
    /**
     * Sets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
     * @param value Value to set for the videoTeleconferenceId property.
     */
    public set videoTeleconferenceId(value: string | undefined) {
        this._videoTeleconferenceId = value;
    };
    /**
     * Gets the virtualAppointment property value. The virtualAppointment property
     * @returns a virtualAppointment
     */
    public get virtualAppointment() {
        return this._virtualAppointment;
    };
    /**
     * Sets the virtualAppointment property value. The virtualAppointment property
     * @param value Value to set for the virtualAppointment property.
     */
    public set virtualAppointment(value: VirtualAppointment | undefined) {
        this._virtualAppointment = value;
    };
}
