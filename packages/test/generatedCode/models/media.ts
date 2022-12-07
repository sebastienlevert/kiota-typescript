import {createMediaSourceFromDiscriminatorValue} from './createMediaSourceFromDiscriminatorValue';
import {MediaSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Media implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If a file has a transcript, this setting controls if the closed captions / transcription for the media file should be shown to people during viewing. Read-Write. */
    private _isTranscriptionShown?: boolean | undefined;
    /** The mediaSource property */
    private _mediaSource?: MediaSource | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new media and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isTranscriptionShown": n => { this.isTranscriptionShown = n.getBooleanValue(); },
            "mediaSource": n => { this.mediaSource = n.getObjectValue<MediaSource>(createMediaSourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isTranscriptionShown property value. If a file has a transcript, this setting controls if the closed captions / transcription for the media file should be shown to people during viewing. Read-Write.
     * @returns a boolean
     */
    public get isTranscriptionShown() {
        return this._isTranscriptionShown;
    };
    /**
     * Sets the isTranscriptionShown property value. If a file has a transcript, this setting controls if the closed captions / transcription for the media file should be shown to people during viewing. Read-Write.
     * @param value Value to set for the isTranscriptionShown property.
     */
    public set isTranscriptionShown(value: boolean | undefined) {
        this._isTranscriptionShown = value;
    };
    /**
     * Gets the mediaSource property value. The mediaSource property
     * @returns a mediaSource
     */
    public get mediaSource() {
        return this._mediaSource;
    };
    /**
     * Sets the mediaSource property value. The mediaSource property
     * @param value Value to set for the mediaSource property.
     */
    public set mediaSource(value: MediaSource | undefined) {
        this._mediaSource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isTranscriptionShown", this.isTranscriptionShown);
        writer.writeObjectValue<MediaSource>("mediaSource", this.mediaSource);
        writer.writeAdditionalData(this.additionalData);
    };
}
