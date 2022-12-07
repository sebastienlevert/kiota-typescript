import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The code property */
    private _code?: string | undefined;
    /** The message property */
    private _message?: string | undefined;
    /** The tenantActionable property */
    private _tenantActionable?: boolean | undefined;
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
     * Gets the code property value. The code property
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. The code property
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new synchronizationError and sets the default values.
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
            "code": n => { this.code = n.getStringValue(); },
            "message": n => { this.message = n.getStringValue(); },
            "tenantActionable": n => { this.tenantActionable = n.getBooleanValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("code", this.code);
        writer.writeStringValue("message", this.message);
        writer.writeBooleanValue("tenantActionable", this.tenantActionable);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tenantActionable property value. The tenantActionable property
     * @returns a boolean
     */
    public get tenantActionable() {
        return this._tenantActionable;
    };
    /**
     * Sets the tenantActionable property value. The tenantActionable property
     * @param value Value to set for the tenantActionable property.
     */
    public set tenantActionable(value: boolean | undefined) {
        this._tenantActionable = value;
    };
}
