import {createThumbnailFromDiscriminatorValue} from './createThumbnailFromDiscriminatorValue';
import {Entity, Thumbnail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThumbnailSet extends Entity implements Parsable {
    /** The large property */
    private _large?: Thumbnail | undefined;
    /** The medium property */
    private _medium?: Thumbnail | undefined;
    /** The small property */
    private _small?: Thumbnail | undefined;
    /** The source property */
    private _source?: Thumbnail | undefined;
    /**
     * Instantiates a new thumbnailSet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "large": n => { this.large = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
            "medium": n => { this.medium = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
            "small": n => { this.small = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
            "source": n => { this.source = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the large property value. The large property
     * @returns a thumbnail
     */
    public get large() {
        return this._large;
    };
    /**
     * Sets the large property value. The large property
     * @param value Value to set for the large property.
     */
    public set large(value: Thumbnail | undefined) {
        this._large = value;
    };
    /**
     * Gets the medium property value. The medium property
     * @returns a thumbnail
     */
    public get medium() {
        return this._medium;
    };
    /**
     * Sets the medium property value. The medium property
     * @param value Value to set for the medium property.
     */
    public set medium(value: Thumbnail | undefined) {
        this._medium = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Thumbnail>("large", this.large);
        writer.writeObjectValue<Thumbnail>("medium", this.medium);
        writer.writeObjectValue<Thumbnail>("small", this.small);
        writer.writeObjectValue<Thumbnail>("source", this.source);
    };
    /**
     * Gets the small property value. The small property
     * @returns a thumbnail
     */
    public get small() {
        return this._small;
    };
    /**
     * Sets the small property value. The small property
     * @param value Value to set for the small property.
     */
    public set small(value: Thumbnail | undefined) {
        this._small = value;
    };
    /**
     * Gets the source property value. The source property
     * @returns a thumbnail
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    public set source(value: Thumbnail | undefined) {
        this._source = value;
    };
}
