import {ItemFacet} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonAward extends ItemFacet implements Parsable {
    /** Descpription of the award or honor. */
    private _description?: string | undefined;
    /** Name of the award or honor. */
    private _displayName?: string | undefined;
    /** The date that the award or honor was granted. */
    private _issuedDate?: DateOnly | undefined;
    /** Authority which granted the award or honor. */
    private _issuingAuthority?: string | undefined;
    /** URL referencing a thumbnail of the award or honor. */
    private _thumbnailUrl?: string | undefined;
    /** URL referencing the award or honor. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new personAward and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Descpription of the award or honor.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Descpription of the award or honor.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Name of the award or honor.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the award or honor.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "issuedDate": n => { this.issuedDate = n.getDateOnlyValue(); },
            "issuingAuthority": n => { this.issuingAuthority = n.getStringValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the issuedDate property value. The date that the award or honor was granted.
     * @returns a DateOnly
     */
    public get issuedDate() {
        return this._issuedDate;
    };
    /**
     * Sets the issuedDate property value. The date that the award or honor was granted.
     * @param value Value to set for the issuedDate property.
     */
    public set issuedDate(value: DateOnly | undefined) {
        this._issuedDate = value;
    };
    /**
     * Gets the issuingAuthority property value. Authority which granted the award or honor.
     * @returns a string
     */
    public get issuingAuthority() {
        return this._issuingAuthority;
    };
    /**
     * Sets the issuingAuthority property value. Authority which granted the award or honor.
     * @param value Value to set for the issuingAuthority property.
     */
    public set issuingAuthority(value: string | undefined) {
        this._issuingAuthority = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateOnlyValue("issuedDate", this.issuedDate);
        writer.writeStringValue("issuingAuthority", this.issuingAuthority);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the thumbnailUrl property value. URL referencing a thumbnail of the award or honor.
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * Sets the thumbnailUrl property value. URL referencing a thumbnail of the award or honor.
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
    /**
     * Gets the webUrl property value. URL referencing the award or honor.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. URL referencing the award or honor.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
