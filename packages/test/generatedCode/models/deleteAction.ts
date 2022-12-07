import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeleteAction implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The name of the item that was deleted. */
    private _name?: string | undefined;
    /** File or Folder, depending on the type of the deleted item. */
    private _objectType?: string | undefined;
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
     * Instantiates a new deleteAction and sets the default values.
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
            "name": n => { this.name = n.getStringValue(); },
            "objectType": n => { this.objectType = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. The name of the item that was deleted.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the item that was deleted.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the objectType property value. File or Folder, depending on the type of the deleted item.
     * @returns a string
     */
    public get objectType() {
        return this._objectType;
    };
    /**
     * Sets the objectType property value. File or Folder, depending on the type of the deleted item.
     * @param value Value to set for the objectType property.
     */
    public set objectType(value: string | undefined) {
        this._objectType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("objectType", this.objectType);
        writer.writeAdditionalData(this.additionalData);
    };
}
