import {ItemFacet} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemPatent extends ItemFacet implements Parsable {
    /** Descpription of the patent or filing. */
    private _description?: string | undefined;
    /** Title of the patent or filing. */
    private _displayName?: string | undefined;
    /** Indicates the patent is pending. */
    private _isPending?: boolean | undefined;
    /** The date that the patent was granted. */
    private _issuedDate?: DateOnly | undefined;
    /** Authority which granted the patent. */
    private _issuingAuthority?: string | undefined;
    /** The patent number. */
    private _number?: string | undefined;
    /** URL referencing the patent or filing. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new itemPatent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Descpription of the patent or filing.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Descpription of the patent or filing.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Title of the patent or filing.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Title of the patent or filing.
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
            "isPending": n => { this.isPending = n.getBooleanValue(); },
            "issuedDate": n => { this.issuedDate = n.getDateOnlyValue(); },
            "issuingAuthority": n => { this.issuingAuthority = n.getStringValue(); },
            "number": n => { this.number = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the isPending property value. Indicates the patent is pending.
     * @returns a boolean
     */
    public get isPending() {
        return this._isPending;
    };
    /**
     * Sets the isPending property value. Indicates the patent is pending.
     * @param value Value to set for the isPending property.
     */
    public set isPending(value: boolean | undefined) {
        this._isPending = value;
    };
    /**
     * Gets the issuedDate property value. The date that the patent was granted.
     * @returns a DateOnly
     */
    public get issuedDate() {
        return this._issuedDate;
    };
    /**
     * Sets the issuedDate property value. The date that the patent was granted.
     * @param value Value to set for the issuedDate property.
     */
    public set issuedDate(value: DateOnly | undefined) {
        this._issuedDate = value;
    };
    /**
     * Gets the issuingAuthority property value. Authority which granted the patent.
     * @returns a string
     */
    public get issuingAuthority() {
        return this._issuingAuthority;
    };
    /**
     * Sets the issuingAuthority property value. Authority which granted the patent.
     * @param value Value to set for the issuingAuthority property.
     */
    public set issuingAuthority(value: string | undefined) {
        this._issuingAuthority = value;
    };
    /**
     * Gets the number property value. The patent number.
     * @returns a string
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. The patent number.
     * @param value Value to set for the number property.
     */
    public set number(value: string | undefined) {
        this._number = value;
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
        writer.writeBooleanValue("isPending", this.isPending);
        writer.writeDateOnlyValue("issuedDate", this.issuedDate);
        writer.writeStringValue("issuingAuthority", this.issuingAuthority);
        writer.writeStringValue("number", this.number);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the webUrl property value. URL referencing the patent or filing.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. URL referencing the patent or filing.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
