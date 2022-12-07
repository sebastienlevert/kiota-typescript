import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ItemBody, ItemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonAnnotation extends ItemFacet implements Parsable {
    /** The detail property */
    private _detail?: ItemBody | undefined;
    /** Contains a friendly name for the note. */
    private _displayName?: string | undefined;
    /** The thumbnailUrl property */
    private _thumbnailUrl?: string | undefined;
    /**
     * Instantiates a new personAnnotation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detail property value. The detail property
     * @returns a itemBody
     */
    public get detail() {
        return this._detail;
    };
    /**
     * Sets the detail property value. The detail property
     * @param value Value to set for the detail property.
     */
    public set detail(value: ItemBody | undefined) {
        this._detail = value;
    };
    /**
     * Gets the displayName property value. Contains a friendly name for the note.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Contains a friendly name for the note.
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
            "detail": n => { this.detail = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemBody>("detail", this.detail);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
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
}
