import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Logged On User */
export class LoggedOnUser implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Date time when user logs on */
    private _lastLogOnDateTime?: Date | undefined;
    /** User id */
    private _userId?: string | undefined;
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
     * Instantiates a new loggedOnUser and sets the default values.
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
            "lastLogOnDateTime": n => { this.lastLogOnDateTime = n.getDateValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastLogOnDateTime property value. Date time when user logs on
     * @returns a Date
     */
    public get lastLogOnDateTime() {
        return this._lastLogOnDateTime;
    };
    /**
     * Sets the lastLogOnDateTime property value. Date time when user logs on
     * @param value Value to set for the lastLogOnDateTime property.
     */
    public set lastLogOnDateTime(value: Date | undefined) {
        this._lastLogOnDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("lastLogOnDateTime", this.lastLogOnDateTime);
        writer.writeStringValue("userId", this.userId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userId property value. User id
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. User id
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
