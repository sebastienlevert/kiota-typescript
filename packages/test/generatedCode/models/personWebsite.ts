import {ItemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonWebsite extends ItemFacet implements Parsable {
    /** Contains categories a user has associated with the website (for example, personal, recipes). */
    private _categories?: string[] | undefined;
    /** Contains a description of the website. */
    private _description?: string | undefined;
    /** Contains a friendly name for the website. */
    private _displayName?: string | undefined;
    /** The thumbnailUrl property */
    private _thumbnailUrl?: string | undefined;
    /** Contains a link to the website itself. */
    private _webUrl?: string | undefined;
    /**
     * Gets the categories property value. Contains categories a user has associated with the website (for example, personal, recipes).
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. Contains categories a user has associated with the website (for example, personal, recipes).
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Instantiates a new personWebsite and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Contains a description of the website.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Contains a description of the website.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Contains a friendly name for the website.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Contains a friendly name for the website.
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
            "categories": n => { this.categories = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the thumbnailUrl property value. The thumbnailUrl property
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * Sets the thumbnailUrl property value. The thumbnailUrl property
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
    /**
     * Gets the webUrl property value. Contains a link to the website itself.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Contains a link to the website itself.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
