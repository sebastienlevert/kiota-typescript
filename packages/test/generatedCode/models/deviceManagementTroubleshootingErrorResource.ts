import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Object representing a link to troubleshooting information, the link could be to the Azure Portal or a Microsoft doc. */
export class DeviceManagementTroubleshootingErrorResource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The link to the web resource. Can contain any of the following formatters: {{UPN}}, {{DeviceGUID}}, {{UserGUID}} */
    private _link?: string | undefined;
    /** Not yet documented */
    private _text?: string | undefined;
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
     * Instantiates a new deviceManagementTroubleshootingErrorResource and sets the default values.
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
            "link": n => { this.link = n.getStringValue(); },
            "text": n => { this.text = n.getStringValue(); },
        };
    };
    /**
     * Gets the link property value. The link to the web resource. Can contain any of the following formatters: {{UPN}}, {{DeviceGUID}}, {{UserGUID}}
     * @returns a string
     */
    public get link() {
        return this._link;
    };
    /**
     * Sets the link property value. The link to the web resource. Can contain any of the following formatters: {{UPN}}, {{DeviceGUID}}, {{UserGUID}}
     * @param value Value to set for the link property.
     */
    public set link(value: string | undefined) {
        this._link = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("link", this.link);
        writer.writeStringValue("text", this.text);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text property value. Not yet documented
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. Not yet documented
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
}
