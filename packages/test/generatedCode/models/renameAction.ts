import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RenameAction implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The new name of the item. */
    private _newName?: string | undefined;
    /** The previous name of the item. */
    private _oldName?: string | undefined;
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
     * Instantiates a new renameAction and sets the default values.
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
            "newName": n => { this.newName = n.getStringValue(); },
            "oldName": n => { this.oldName = n.getStringValue(); },
        };
    };
    /**
     * Gets the newName property value. The new name of the item.
     * @returns a string
     */
    public get newName() {
        return this._newName;
    };
    /**
     * Sets the newName property value. The new name of the item.
     * @param value Value to set for the newName property.
     */
    public set newName(value: string | undefined) {
        this._newName = value;
    };
    /**
     * Gets the oldName property value. The previous name of the item.
     * @returns a string
     */
    public get oldName() {
        return this._oldName;
    };
    /**
     * Sets the oldName property value. The previous name of the item.
     * @param value Value to set for the oldName property.
     */
    public set oldName(value: string | undefined) {
        this._oldName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("newName", this.newName);
        writer.writeStringValue("oldName", this.oldName);
        writer.writeAdditionalData(this.additionalData);
    };
}
