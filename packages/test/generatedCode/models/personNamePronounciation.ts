import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonNamePronounciation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The first property */
    private _first?: string | undefined;
    /** The last property */
    private _last?: string | undefined;
    /** The maiden property */
    private _maiden?: string | undefined;
    /** The middle property */
    private _middle?: string | undefined;
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
     * Instantiates a new personNamePronounciation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the first property value. The first property
     * @returns a string
     */
    public get first() {
        return this._first;
    };
    /**
     * Sets the first property value. The first property
     * @param value Value to set for the first property.
     */
    public set first(value: string | undefined) {
        this._first = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "first": n => { this.first = n.getStringValue(); },
            "last": n => { this.last = n.getStringValue(); },
            "maiden": n => { this.maiden = n.getStringValue(); },
            "middle": n => { this.middle = n.getStringValue(); },
        };
    };
    /**
     * Gets the last property value. The last property
     * @returns a string
     */
    public get last() {
        return this._last;
    };
    /**
     * Sets the last property value. The last property
     * @param value Value to set for the last property.
     */
    public set last(value: string | undefined) {
        this._last = value;
    };
    /**
     * Gets the maiden property value. The maiden property
     * @returns a string
     */
    public get maiden() {
        return this._maiden;
    };
    /**
     * Sets the maiden property value. The maiden property
     * @param value Value to set for the maiden property.
     */
    public set maiden(value: string | undefined) {
        this._maiden = value;
    };
    /**
     * Gets the middle property value. The middle property
     * @returns a string
     */
    public get middle() {
        return this._middle;
    };
    /**
     * Sets the middle property value. The middle property
     * @param value Value to set for the middle property.
     */
    public set middle(value: string | undefined) {
        this._middle = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("first", this.first);
        writer.writeStringValue("last", this.last);
        writer.writeStringValue("maiden", this.maiden);
        writer.writeStringValue("middle", this.middle);
        writer.writeAdditionalData(this.additionalData);
    };
}
