import {ItemFacet} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemPublication extends ItemFacet implements Parsable {
    /** Description of the publication. */
    private _description?: string | undefined;
    /** Title of the publication. */
    private _displayName?: string | undefined;
    /** The date that the publication was published. */
    private _publishedDate?: DateOnly | undefined;
    /** Publication or publisher for the publication. */
    private _publisher?: string | undefined;
    /** URL referencing a thumbnail of the publication. */
    private _thumbnailUrl?: string | undefined;
    /** URL referencing the publication. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new itemPublication and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the publication.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the publication.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Title of the publication.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Title of the publication.
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
            "publishedDate": n => { this.publishedDate = n.getDateOnlyValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the publishedDate property value. The date that the publication was published.
     * @returns a DateOnly
     */
    public get publishedDate() {
        return this._publishedDate;
    };
    /**
     * Sets the publishedDate property value. The date that the publication was published.
     * @param value Value to set for the publishedDate property.
     */
    public set publishedDate(value: DateOnly | undefined) {
        this._publishedDate = value;
    };
    /**
     * Gets the publisher property value. Publication or publisher for the publication.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. Publication or publisher for the publication.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
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
        writer.writeDateOnlyValue("publishedDate", this.publishedDate);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the thumbnailUrl property value. URL referencing a thumbnail of the publication.
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * Sets the thumbnailUrl property value. URL referencing a thumbnail of the publication.
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
    /**
     * Gets the webUrl property value. URL referencing the publication.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. URL referencing the publication.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
