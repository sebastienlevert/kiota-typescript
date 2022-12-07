import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedAppleDeviceUser implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Data quota */
    private _dataQuota?: number | undefined;
    /** Data to sync */
    private _dataToSync?: boolean | undefined;
    /** Data quota */
    private _dataUsed?: number | undefined;
    /** User name */
    private _userPrincipalName?: string | undefined;
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
     * Instantiates a new sharedAppleDeviceUser and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dataQuota property value. Data quota
     * @returns a int64
     */
    public get dataQuota() {
        return this._dataQuota;
    };
    /**
     * Sets the dataQuota property value. Data quota
     * @param value Value to set for the dataQuota property.
     */
    public set dataQuota(value: number | undefined) {
        this._dataQuota = value;
    };
    /**
     * Gets the dataToSync property value. Data to sync
     * @returns a boolean
     */
    public get dataToSync() {
        return this._dataToSync;
    };
    /**
     * Sets the dataToSync property value. Data to sync
     * @param value Value to set for the dataToSync property.
     */
    public set dataToSync(value: boolean | undefined) {
        this._dataToSync = value;
    };
    /**
     * Gets the dataUsed property value. Data quota
     * @returns a int64
     */
    public get dataUsed() {
        return this._dataUsed;
    };
    /**
     * Sets the dataUsed property value. Data quota
     * @param value Value to set for the dataUsed property.
     */
    public set dataUsed(value: number | undefined) {
        this._dataUsed = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dataQuota": n => { this.dataQuota = n.getNumberValue(); },
            "dataToSync": n => { this.dataToSync = n.getBooleanValue(); },
            "dataUsed": n => { this.dataUsed = n.getNumberValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("dataQuota", this.dataQuota);
        writer.writeBooleanValue("dataToSync", this.dataToSync);
        writer.writeNumberValue("dataUsed", this.dataUsed);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userPrincipalName property value. User name
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. User name
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
