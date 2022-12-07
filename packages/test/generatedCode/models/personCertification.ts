import {ItemFacet} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonCertification extends ItemFacet implements Parsable {
    /** The referenceable identifier for the certification. */
    private _certificationId?: string | undefined;
    /** Description of the certification. */
    private _description?: string | undefined;
    /** Title of the certification. */
    private _displayName?: string | undefined;
    /** The date that the certification expires. */
    private _endDate?: DateOnly | undefined;
    /** The date that the certification was issued. */
    private _issuedDate?: DateOnly | undefined;
    /** Authority which granted the certification. */
    private _issuingAuthority?: string | undefined;
    /** Company which granted the certification. */
    private _issuingCompany?: string | undefined;
    /** The date that the certification became valid. */
    private _startDate?: DateOnly | undefined;
    /** URL referencing a thumbnail of the certification. */
    private _thumbnailUrl?: string | undefined;
    /** URL referencing the certification. */
    private _webUrl?: string | undefined;
    /**
     * Gets the certificationId property value. The referenceable identifier for the certification.
     * @returns a string
     */
    public get certificationId() {
        return this._certificationId;
    };
    /**
     * Sets the certificationId property value. The referenceable identifier for the certification.
     * @param value Value to set for the certificationId property.
     */
    public set certificationId(value: string | undefined) {
        this._certificationId = value;
    };
    /**
     * Instantiates a new personCertification and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the certification.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the certification.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Title of the certification.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Title of the certification.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the endDate property value. The date that the certification expires.
     * @returns a DateOnly
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Sets the endDate property value. The date that the certification expires.
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: DateOnly | undefined) {
        this._endDate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificationId": n => { this.certificationId = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDate": n => { this.endDate = n.getDateOnlyValue(); },
            "issuedDate": n => { this.issuedDate = n.getDateOnlyValue(); },
            "issuingAuthority": n => { this.issuingAuthority = n.getStringValue(); },
            "issuingCompany": n => { this.issuingCompany = n.getStringValue(); },
            "startDate": n => { this.startDate = n.getDateOnlyValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the issuedDate property value. The date that the certification was issued.
     * @returns a DateOnly
     */
    public get issuedDate() {
        return this._issuedDate;
    };
    /**
     * Sets the issuedDate property value. The date that the certification was issued.
     * @param value Value to set for the issuedDate property.
     */
    public set issuedDate(value: DateOnly | undefined) {
        this._issuedDate = value;
    };
    /**
     * Gets the issuingAuthority property value. Authority which granted the certification.
     * @returns a string
     */
    public get issuingAuthority() {
        return this._issuingAuthority;
    };
    /**
     * Sets the issuingAuthority property value. Authority which granted the certification.
     * @param value Value to set for the issuingAuthority property.
     */
    public set issuingAuthority(value: string | undefined) {
        this._issuingAuthority = value;
    };
    /**
     * Gets the issuingCompany property value. Company which granted the certification.
     * @returns a string
     */
    public get issuingCompany() {
        return this._issuingCompany;
    };
    /**
     * Sets the issuingCompany property value. Company which granted the certification.
     * @param value Value to set for the issuingCompany property.
     */
    public set issuingCompany(value: string | undefined) {
        this._issuingCompany = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("certificationId", this.certificationId);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateOnlyValue("endDate", this.endDate);
        writer.writeDateOnlyValue("issuedDate", this.issuedDate);
        writer.writeStringValue("issuingAuthority", this.issuingAuthority);
        writer.writeStringValue("issuingCompany", this.issuingCompany);
        writer.writeDateOnlyValue("startDate", this.startDate);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the startDate property value. The date that the certification became valid.
     * @returns a DateOnly
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * Sets the startDate property value. The date that the certification became valid.
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: DateOnly | undefined) {
        this._startDate = value;
    };
    /**
     * Gets the thumbnailUrl property value. URL referencing a thumbnail of the certification.
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * Sets the thumbnailUrl property value. URL referencing a thumbnail of the certification.
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
    /**
     * Gets the webUrl property value. URL referencing the certification.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. URL referencing the certification.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
