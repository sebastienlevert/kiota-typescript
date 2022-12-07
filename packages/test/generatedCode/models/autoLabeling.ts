import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutoLabeling implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The message property */
    private _message?: string | undefined;
    /** The sensitiveTypeIds property */
    private _sensitiveTypeIds?: string[] | undefined;
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
     * Instantiates a new autoLabeling and sets the default values.
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
            "message": n => { this.message = n.getStringValue(); },
            "sensitiveTypeIds": n => { this.sensitiveTypeIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the message property value. The message property
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Gets the sensitiveTypeIds property value. The sensitiveTypeIds property
     * @returns a string
     */
    public get sensitiveTypeIds() {
        return this._sensitiveTypeIds;
    };
    /**
     * Sets the sensitiveTypeIds property value. The sensitiveTypeIds property
     * @param value Value to set for the sensitiveTypeIds property.
     */
    public set sensitiveTypeIds(value: string[] | undefined) {
        this._sensitiveTypeIds = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("message", this.message);
        writer.writeCollectionOfPrimitiveValues<string>("sensitiveTypeIds", this.sensitiveTypeIds);
        writer.writeAdditionalData(this.additionalData);
    };
}
