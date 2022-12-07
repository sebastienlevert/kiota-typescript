import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudPcStatusDetails implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Any additional information about the Cloud PC status. */
    private _additionalInformation?: KeyValuePair[] | undefined;
    /** The code associated with the Cloud PC status. */
    private _code?: string | undefined;
    /** The status message. */
    private _message?: string | undefined;
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
     * Gets the additionalInformation property value. Any additional information about the Cloud PC status.
     * @returns a keyValuePair
     */
    public get additionalInformation() {
        return this._additionalInformation;
    };
    /**
     * Sets the additionalInformation property value. Any additional information about the Cloud PC status.
     * @param value Value to set for the additionalInformation property.
     */
    public set additionalInformation(value: KeyValuePair[] | undefined) {
        this._additionalInformation = value;
    };
    /**
     * Gets the code property value. The code associated with the Cloud PC status.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The code associated with the Cloud PC status.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new cloudPcStatusDetails and sets the default values.
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
            "additionalInformation": n => { this.additionalInformation = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
            "code": n => { this.code = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. The status message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The status message.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<KeyValuePair>("additionalInformation", this.additionalInformation);
        writer.writeStringValue("code", this.code);
        writer.writeStringValue("message", this.message);
        writer.writeAdditionalData(this.additionalData);
    };
}
