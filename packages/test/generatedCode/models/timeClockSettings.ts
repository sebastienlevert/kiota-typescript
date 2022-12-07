import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {GeoCoordinates} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeClockSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The approvedLocation property */
    private _approvedLocation?: GeoCoordinates | undefined;
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
     * Gets the approvedLocation property value. The approvedLocation property
     * @returns a geoCoordinates
     */
    public get approvedLocation() {
        return this._approvedLocation;
    };
    /**
     * Sets the approvedLocation property value. The approvedLocation property
     * @param value Value to set for the approvedLocation property.
     */
    public set approvedLocation(value: GeoCoordinates | undefined) {
        this._approvedLocation = value;
    };
    /**
     * Instantiates a new timeClockSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "approvedLocation": n => { this.approvedLocation = n.getObjectValue<GeoCoordinates>(createGeoCoordinatesFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<GeoCoordinates>("approvedLocation", this.approvedLocation);
        writer.writeAdditionalData(this.additionalData);
    };
}
