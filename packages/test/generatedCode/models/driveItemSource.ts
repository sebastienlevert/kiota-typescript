import {DriveItemSourceApplication} from './driveItemSourceApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemSource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The application property */
    private _application?: DriveItemSourceApplication | undefined;
    /** The external identifier for the drive item from the source. */
    private _externalId?: string | undefined;
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
     * Gets the application property value. The application property
     * @returns a driveItemSourceApplication
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. The application property
     * @param value Value to set for the application property.
     */
    public set application(value: DriveItemSourceApplication | undefined) {
        this._application = value;
    };
    /**
     * Instantiates a new driveItemSource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the externalId property value. The external identifier for the drive item from the source.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. The external identifier for the drive item from the source.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "application": n => { this.application = n.getEnumValue<DriveItemSourceApplication>(DriveItemSourceApplication); },
            "externalId": n => { this.externalId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<DriveItemSourceApplication>("application", this.application);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeAdditionalData(this.additionalData);
    };
}
