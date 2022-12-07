import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {createWebPartFromDiscriminatorValue} from './createWebPartFromDiscriminatorValue';
import {BaseItem, ContentTypeInfo, PublicationFacet, WebPart} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SitePage extends BaseItem implements Parsable {
    /** The contentType property */
    private _contentType?: ContentTypeInfo | undefined;
    /** The pageLayoutType property */
    private _pageLayoutType?: string | undefined;
    /** The publishingState property */
    private _publishingState?: PublicationFacet | undefined;
    /** The title property */
    private _title?: string | undefined;
    /** The webParts property */
    private _webParts?: WebPart[] | undefined;
    /**
     * Instantiates a new sitePage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentType property value. The contentType property
     * @returns a contentTypeInfo
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The contentType property
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        this._contentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentType": n => { this.contentType = n.getObjectValue<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
            "pageLayoutType": n => { this.pageLayoutType = n.getStringValue(); },
            "publishingState": n => { this.publishingState = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); },
            "title": n => { this.title = n.getStringValue(); },
            "webParts": n => { this.webParts = n.getCollectionOfObjectValues<WebPart>(createWebPartFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pageLayoutType property value. The pageLayoutType property
     * @returns a string
     */
    public get pageLayoutType() {
        return this._pageLayoutType;
    };
    /**
     * Sets the pageLayoutType property value. The pageLayoutType property
     * @param value Value to set for the pageLayoutType property.
     */
    public set pageLayoutType(value: string | undefined) {
        this._pageLayoutType = value;
    };
    /**
     * Gets the publishingState property value. The publishingState property
     * @returns a publicationFacet
     */
    public get publishingState() {
        return this._publishingState;
    };
    /**
     * Sets the publishingState property value. The publishingState property
     * @param value Value to set for the publishingState property.
     */
    public set publishingState(value: PublicationFacet | undefined) {
        this._publishingState = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ContentTypeInfo>("contentType", this.contentType);
        writer.writeStringValue("pageLayoutType", this.pageLayoutType);
        writer.writeObjectValue<PublicationFacet>("publishingState", this.publishingState);
        writer.writeStringValue("title", this.title);
        writer.writeCollectionOfObjectValues<WebPart>("webParts", this.webParts);
    };
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the webParts property value. The webParts property
     * @returns a webPart
     */
    public get webParts() {
        return this._webParts;
    };
    /**
     * Sets the webParts property value. The webParts property
     * @param value Value to set for the webParts property.
     */
    public set webParts(value: WebPart[] | undefined) {
        this._webParts = value;
    };
}
