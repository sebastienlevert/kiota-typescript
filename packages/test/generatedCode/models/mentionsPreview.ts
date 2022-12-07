import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MentionsPreview implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** True if the signed-in user is mentioned in the parent resource instance. Read-only. Supports filter. */
    private _isMentioned?: boolean | undefined;
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
     * Instantiates a new mentionsPreview and sets the default values.
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
            "isMentioned": n => { this.isMentioned = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isMentioned property value. True if the signed-in user is mentioned in the parent resource instance. Read-only. Supports filter.
     * @returns a boolean
     */
    public get isMentioned() {
        return this._isMentioned;
    };
    /**
     * Sets the isMentioned property value. True if the signed-in user is mentioned in the parent resource instance. Read-only. Supports filter.
     * @param value Value to set for the isMentioned property.
     */
    public set isMentioned(value: boolean | undefined) {
        this._isMentioned = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isMentioned", this.isMentioned);
        writer.writeAdditionalData(this.additionalData);
    };
}
