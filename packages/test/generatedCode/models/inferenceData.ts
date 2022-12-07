import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InferenceData implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Confidence score reflecting the accuracy of the data inferred about the user. */
    private _confidenceScore?: number | undefined;
    /** Records if the user has confirmed this inference as being True or False. */
    private _userHasVerifiedAccuracy?: boolean | undefined;
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
     * Gets the confidenceScore property value. Confidence score reflecting the accuracy of the data inferred about the user.
     * @returns a double
     */
    public get confidenceScore() {
        return this._confidenceScore;
    };
    /**
     * Sets the confidenceScore property value. Confidence score reflecting the accuracy of the data inferred about the user.
     * @param value Value to set for the confidenceScore property.
     */
    public set confidenceScore(value: number | undefined) {
        this._confidenceScore = value;
    };
    /**
     * Instantiates a new inferenceData and sets the default values.
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
            "confidenceScore": n => { this.confidenceScore = n.getNumberValue(); },
            "userHasVerifiedAccuracy": n => { this.userHasVerifiedAccuracy = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("confidenceScore", this.confidenceScore);
        writer.writeBooleanValue("userHasVerifiedAccuracy", this.userHasVerifiedAccuracy);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userHasVerifiedAccuracy property value. Records if the user has confirmed this inference as being True or False.
     * @returns a boolean
     */
    public get userHasVerifiedAccuracy() {
        return this._userHasVerifiedAccuracy;
    };
    /**
     * Sets the userHasVerifiedAccuracy property value. Records if the user has confirmed this inference as being True or False.
     * @param value Value to set for the userHasVerifiedAccuracy property.
     */
    public set userHasVerifiedAccuracy(value: boolean | undefined) {
        this._userHasVerifiedAccuracy = value;
    };
}
