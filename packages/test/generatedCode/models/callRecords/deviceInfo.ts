import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the capture device driver used by the media endpoint. */
    captureDeviceDriver?: string;
    /** Name of the capture device used by the media endpoint. */
    captureDeviceName?: string;
    /** Fraction of the call that the media endpoint detected the capture device was not working properly. */
    captureNotFunctioningEventRatio?: number;
    /** Fraction of the call that the media endpoint detected the CPU resources available were insufficient and caused poor quality of the audio sent and received. */
    cpuInsufficentEventRatio?: number;
    /** Fraction of the call that the media endpoint detected clipping in the captured audio that caused poor quality of the audio being sent. */
    deviceClippingEventRatio?: number;
    /** Fraction of the call that the media endpoint detected glitches or gaps in the audio played or captured that caused poor quality of the audio being sent or received. */
    deviceGlitchEventRatio?: number;
    /** Number of times during the call that the media endpoint detected howling or screeching audio. */
    howlingEventCount?: number;
    /** The root mean square (RMS) of the incoming signal of up to the first 30 seconds of the call. */
    initialSignalLevelRootMeanSquare?: number;
    /** Fraction of the call that the media endpoint detected low speech level that caused poor quality of the audio being sent. */
    lowSpeechLevelEventRatio?: number;
    /** Fraction of the call that the media endpoint detected low speech to noise level that caused poor quality of the audio being sent. */
    lowSpeechToNoiseEventRatio?: number;
    /** Glitches per 5 minute interval for the media endpoint's microphone. */
    micGlitchRate?: number;
    /** The OdataType property */
    odataType?: string;
    /** Average energy level of received audio for audio classified as mono noise or left channel of stereo noise by the media endpoint. */
    receivedNoiseLevel?: number;
    /** Average energy level of received audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint. */
    receivedSignalLevel?: number;
    /** Name of the render device driver used by the media endpoint. */
    renderDeviceDriver?: string;
    /** Name of the render device used by the media endpoint. */
    renderDeviceName?: string;
    /** Fraction of the call that media endpoint detected device render is muted. */
    renderMuteEventRatio?: number;
    /** Fraction of the call that the media endpoint detected the render device was not working properly. */
    renderNotFunctioningEventRatio?: number;
    /** Fraction of the call that media endpoint detected device render volume is set to 0. */
    renderZeroVolumeEventRatio?: number;
    /** Average energy level of sent audio for audio classified as mono noise or left channel of stereo noise by the media endpoint. */
    sentNoiseLevel?: number;
    /** Average energy level of sent audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint. */
    sentSignalLevel?: number;
    /** Glitches per 5 minute internal for the media endpoint's loudspeaker. */
    speakerGlitchRate?: number;
}
