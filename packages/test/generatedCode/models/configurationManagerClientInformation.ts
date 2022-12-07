import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Configuration Manager client information synced from SCCM */
export class ConfigurationManagerClientInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Configuration Manager Client Id from SCCM */
    private _clientIdentifier?: string | undefined;
    /** Configuration Manager Client version from SCCM */
    private _clientVersion?: string | undefined;
    /** Configuration Manager Client blocked status from SCCM */
    private _isBlocked?: boolean | undefined;
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
     * Gets the clientIdentifier property value. Configuration Manager Client Id from SCCM
     * @returns a string
     */
    public get clientIdentifier() {
        return this._clientIdentifier;
    };
    /**
     * Sets the clientIdentifier property value. Configuration Manager Client Id from SCCM
     * @param value Value to set for the clientIdentifier property.
     */
    public set clientIdentifier(value: string | undefined) {
        this._clientIdentifier = value;
    };
    /**
     * Gets the clientVersion property value. Configuration Manager Client version from SCCM
     * @returns a string
     */
    public get clientVersion() {
        return this._clientVersion;
    };
    /**
     * Sets the clientVersion property value. Configuration Manager Client version from SCCM
     * @param value Value to set for the clientVersion property.
     */
    public set clientVersion(value: string | undefined) {
        this._clientVersion = value;
    };
    /**
     * Instantiates a new configurationManagerClientInformation and sets the default values.
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
            "clientIdentifier": n => { this.clientIdentifier = n.getStringValue(); },
            "clientVersion": n => { this.clientVersion = n.getStringValue(); },
            "isBlocked": n => { this.isBlocked = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isBlocked property value. Configuration Manager Client blocked status from SCCM
     * @returns a boolean
     */
    public get isBlocked() {
        return this._isBlocked;
    };
    /**
     * Sets the isBlocked property value. Configuration Manager Client blocked status from SCCM
     * @param value Value to set for the isBlocked property.
     */
    public set isBlocked(value: boolean | undefined) {
        this._isBlocked = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("clientIdentifier", this.clientIdentifier);
        writer.writeStringValue("clientVersion", this.clientVersion);
        writer.writeBooleanValue("isBlocked", this.isBlocked);
        writer.writeAdditionalData(this.additionalData);
    };
}
