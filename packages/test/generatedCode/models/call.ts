import {CallDirection} from './callDirection';
import {CallState} from './callState';
import {AudioRoutingGroup, CallMediaState, CallOptions, CallRoute, CallTranscriptionInfo, ChatInfo, CommsOperation, ContentSharingSession, Entity, IncomingContext, InvitationParticipantInfo, MediaConfig, MeetingInfo, Participant, ParticipantInfo, ResultInfo, ToneInfo} from './index';
import {Modality} from './modality';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Call extends Entity, Partial<Parsable> {
    /** The audioRoutingGroups property */
    audioRoutingGroups?: AudioRoutingGroup[];
    /** The callback URL on which callbacks will be delivered. Must be https. */
    callbackUri?: string;
    /** A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    callChainId?: string;
    /** Contains the optional features for the call. */
    callOptions?: CallOptions;
    /** The routing information on how the call was retargeted. Read-only. */
    callRoutes?: CallRoute[];
    /** The chat information. Required information for joining a meeting. */
    chatInfo?: ChatInfo;
    /** The contentSharingSessions property */
    contentSharingSessions?: ContentSharingSession[];
    /** The direction of the call. The possible value are incoming or outgoing. Read-only. */
    direction?: CallDirection;
    /** Call context associated with an incoming call. */
    incomingContext?: IncomingContext;
    /** The media configuration. Required. */
    mediaConfig?: MediaConfig;
    /** Read-only. The call media state. */
    mediaState?: CallMediaState;
    /** The meeting information that's required for joining a meeting. */
    meetingInfo?: MeetingInfo;
    /** The myParticipantId property */
    myParticipantId?: string;
    /** The operations property */
    operations?: CommsOperation[];
    /** The participants property */
    participants?: Participant[];
    /** The list of requested modalities. Possible values are: unknown, audio, video, videoBasedScreenSharing, data. */
    requestedModalities?: Modality[];
    /** The result information. For example can hold termination reason. Read-only. */
    resultInfo?: ResultInfo;
    /** The originator of the call. */
    source?: ParticipantInfo;
    /** The call state. Possible values are: incoming, establishing, ringing, established, hold, transferring, transferAccepted, redirecting, terminating, terminated. Read-only. */
    state?: CallState;
    /** The subject of the conversation. */
    subject?: string;
    /** The targets of the call. Required information for creating peer to peer call. */
    targets?: InvitationParticipantInfo[];
    /** The tenantId property */
    tenantId?: string;
    /** The toneInfo property */
    toneInfo?: ToneInfo;
    /** The transcription information for the call. Read-only. */
    transcription?: CallTranscriptionInfo;
}
