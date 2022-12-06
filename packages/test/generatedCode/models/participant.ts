import {Entity, MediaStream, ParticipantInfo, RecordingInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Participant extends Entity, Partial<Parsable> {
    /** The info property */
    info?: ParticipantInfo;
    /** true if the participant is in lobby. */
    isInLobby?: boolean;
    /** true if the participant is muted (client or server muted). */
    isMuted?: boolean;
    /** The list of media streams. */
    mediaStreams?: MediaStream[];
    /** A blob of data provided by the participant in the roster. */
    metadata?: string;
    /** Information about whether the participant has recording capability. */
    recordingInfo?: RecordingInfo;
}
