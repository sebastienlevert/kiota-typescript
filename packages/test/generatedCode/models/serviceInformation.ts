import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The name of the cloud service (for example, Twitter, Instagram). */
    private _name?: string | undefined;
    /** Contains the URL for the service being referenced. */
    private _webUrl?: string | undefined;
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
     * Instantiates a new serviceInformation and sets the default values.
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
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. The name of the cloud service (for example, Twitter, Instagram).
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the cloud service (for example, Twitter, Instagram).
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("webUrl", this.webUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the webUrl property value. Contains the URL for the service being referenced.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Contains the URL for the service being referenced.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
