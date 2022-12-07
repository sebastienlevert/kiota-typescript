import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Video extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Number of audio bits per sample. */
    audioBitsPerSample?: number;
    /** Number of audio channels. */
    audioChannels?: number;
    /** Name of the audio format (AAC, MP3, etc.). */
    audioFormat?: string;
    /** Number of audio samples per second. */
    audioSamplesPerSecond?: number;
    /** Bit rate of the video in bits per second. */
    bitrate?: number;
    /** Duration of the file in milliseconds. */
    duration?: number;
    /** 'Four character code' name of the video format. */
    fourCC?: string;
    /** The frameRate property */
    frameRate?: number;
    /** Height of the video, in pixels. */
    height?: number;
    /** Width of the video, in pixels. */
    width?: number;
}
