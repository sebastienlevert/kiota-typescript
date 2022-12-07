import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReferencedObject implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the referenced object. Must match one of the objects in the directory definition. */
    private _referencedObjectName?: string | undefined;
    /** Currently not supported. Name of the property in the referenced object, the value for which is used as the reference. */
    private _referencedProperty?: string | undefined;
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
     * Instantiates a new referencedObject and sets the default values.
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
            "referencedObjectName": n => { this.referencedObjectName = n.getStringValue(); },
            "referencedProperty": n => { this.referencedProperty = n.getStringValue(); },
        };
    };
    /**
     * Gets the referencedObjectName property value. Name of the referenced object. Must match one of the objects in the directory definition.
     * @returns a string
     */
    public get referencedObjectName() {
        return this._referencedObjectName;
    };
    /**
     * Sets the referencedObjectName property value. Name of the referenced object. Must match one of the objects in the directory definition.
     * @param value Value to set for the referencedObjectName property.
     */
    public set referencedObjectName(value: string | undefined) {
        this._referencedObjectName = value;
    };
    /**
     * Gets the referencedProperty property value. Currently not supported. Name of the property in the referenced object, the value for which is used as the reference.
     * @returns a string
     */
    public get referencedProperty() {
        return this._referencedProperty;
    };
    /**
     * Sets the referencedProperty property value. Currently not supported. Name of the property in the referenced object, the value for which is used as the reference.
     * @param value Value to set for the referencedProperty property.
     */
    public set referencedProperty(value: string | undefined) {
        this._referencedProperty = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("referencedObjectName", this.referencedObjectName);
        writer.writeStringValue("referencedProperty", this.referencedProperty);
        writer.writeAdditionalData(this.additionalData);
    };
}
