import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SiteSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The language tag for the language used on this site. */
    private _languageTag?: string | undefined;
    /** Indicates the time offset for the time zone of the site from Coordinated Universal Time (UTC). */
    private _timeZone?: string | undefined;
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
     * Instantiates a new siteSettings and sets the default values.
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
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
        };
    };
    /**
     * Gets the languageTag property value. The language tag for the language used on this site.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. The language tag for the language used on this site.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeZone property value. Indicates the time offset for the time zone of the site from Coordinated Universal Time (UTC).
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. Indicates the time offset for the time zone of the site from Coordinated Universal Time (UTC).
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
}
