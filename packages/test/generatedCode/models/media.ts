import {MediaSource} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Media extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If a file has a transcript, this setting controls if the closed captions / transcription for the media file should be shown to people during viewing. Read-Write. */
    isTranscriptionShown?: boolean;
    /** The mediaSource property */
    mediaSource?: MediaSource;
}
