import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VisualProperties implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The body of a visual user notification. Body is optional. */
    private _body?: string | undefined;
    /** The title of a visual user notification. This field is required for visual notification payloads. */
    private _title?: string | undefined;
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
     * Gets the body property value. The body of a visual user notification. Body is optional.
     * @returns a string
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The body of a visual user notification. Body is optional.
     * @param value Value to set for the body property.
     */
    public set body(value: string | undefined) {
        this._body = value;
    };
    /**
     * Instantiates a new visualProperties and sets the default values.
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
            "body": n => { this.body = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("body", this.body);
        writer.writeStringValue("title", this.title);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the title property value. The title of a visual user notification. This field is required for visual notification payloads.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title of a visual user notification. This field is required for visual notification payloads.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
