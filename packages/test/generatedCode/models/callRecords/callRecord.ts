import {Entity, IdentitySet} from '../';
import {CallType} from './callType';
import {Session} from './index';
import {Modality} from './modality';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallRecord extends Entity, Partial<Parsable> {
    /** UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    endDateTime?: Date;
    /** Meeting URL associated to the call. May not be available for a peerToPeer call record type. */
    joinWebUrl?: string;
    /** UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    lastModifiedDateTime?: Date;
    /** List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data, screenSharing, unknownFutureValue. */
    modalities?: Modality[];
    /** The organizing party's identity. */
    organizer?: IdentitySet;
    /** List of distinct identities involved in the call. */
    participants?: IdentitySet[];
    /** List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable. */
    sessions?: Session[];
    /** UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    startDateTime?: Date;
    /** The type property */
    type?: CallType;
    /** Monotonically increasing version of the call record. Higher version call records with the same id includes additional data compared to the lower version. */
    version?: number;
}
