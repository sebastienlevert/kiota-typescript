import {OnenoteEntityBaseModel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenoteResource extends OnenoteEntityBaseModel implements Parsable {
    /** The content property */
    private _content?: string | undefined;
    /** The contentUrl property */
    private _contentUrl?: string | undefined;
    /**
     * Instantiates a new onenoteResource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content property
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content property
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the contentUrl property value. The contentUrl property
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. The contentUrl property
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("contentUrl", this.contentUrl);
    };
}
