import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {PhysicalAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InstitutionData implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Short description of the institution the user studied at. */
    private _description?: string | undefined;
    /** Name of the institution the user studied at. */
    private _displayName?: string | undefined;
    /** The location property */
    private _location?: PhysicalAddress | undefined;
    /** Link to the institution or department homepage. */
    private _webUrl?: string | undefined;
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
     * Instantiates a new institutionData and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. Short description of the institution the user studied at.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Short description of the institution the user studied at.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Name of the institution the user studied at.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the institution the user studied at.
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
        return {
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "location": n => { this.location = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the location property value. The location property
     * @returns a physicalAddress
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The location property
     * @param value Value to set for the location property.
     */
    public set location(value: PhysicalAddress | undefined) {
        this._location = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<PhysicalAddress>("location", this.location);
        writer.writeStringValue("webUrl", this.webUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the webUrl property value. Link to the institution or department homepage.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Link to the institution or department homepage.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
