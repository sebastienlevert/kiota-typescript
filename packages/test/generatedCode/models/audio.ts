import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Audio extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The title of the album for this audio file. */
    album?: string;
    /** The artist named on the album for the audio file. */
    albumArtist?: string;
    /** The performing artist for the audio file. */
    artist?: string;
    /** Bitrate expressed in kbps. */
    bitrate?: number;
    /** The name of the composer of the audio file. */
    composers?: string;
    /** Copyright information for the audio file. */
    copyright?: string;
    /** The number of the disc this audio file came from. */
    disc?: number;
    /** The total number of discs in this album. */
    discCount?: number;
    /** Duration of the audio file, expressed in milliseconds */
    duration?: number;
    /** The genre of this audio file. */
    genre?: string;
    /** Indicates if the file is protected with digital rights management. */
    hasDrm?: boolean;
    /** Indicates if the file is encoded with a variable bitrate. */
    isVariableBitrate?: boolean;
    /** The title of the audio file. */
    title?: string;
    /** The number of the track on the original disc for this audio file. */
    track?: number;
    /** The total number of tracks on the original disc for this audio file. */
    trackCount?: number;
    /** The year the audio file was recorded. */
    year?: number;
}
