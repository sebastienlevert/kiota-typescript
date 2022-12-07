import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {GeoCoordinates, ItemFacet, PhysicalAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemAddress extends ItemFacet implements Parsable {
    /** The detail property */
    private _detail?: PhysicalAddress | undefined;
    /** Friendly name the user has assigned to this address. */
    private _displayName?: string | undefined;
    /** The geoCoordinates property */
    private _geoCoordinates?: GeoCoordinates | undefined;
    /**
     * Instantiates a new itemAddress and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detail property value. The detail property
     * @returns a physicalAddress
     */
    public get detail() {
        return this._detail;
    };
    /**
     * Sets the detail property value. The detail property
     * @param value Value to set for the detail property.
     */
    public set detail(value: PhysicalAddress | undefined) {
        this._detail = value;
    };
    /**
     * Gets the displayName property value. Friendly name the user has assigned to this address.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Friendly name the user has assigned to this address.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the geoCoordinates property value. The geoCoordinates property
     * @returns a geoCoordinates
     */
    public get geoCoordinates() {
        return this._geoCoordinates;
    };
    /**
     * Sets the geoCoordinates property value. The geoCoordinates property
     * @param value Value to set for the geoCoordinates property.
     */
    public set geoCoordinates(value: GeoCoordinates | undefined) {
        this._geoCoordinates = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "detail": n => { this.detail = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "geoCoordinates": n => { this.geoCoordinates = n.getObjectValue<GeoCoordinates>(createGeoCoordinatesFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PhysicalAddress>("detail", this.detail);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<GeoCoordinates>("geoCoordinates", this.geoCoordinates);
    };
}
