import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Settings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies if the user's primary mailbox is hosted in the cloud and is enabled for Microsoft Graph. */
    private _hasGraphMailbox?: boolean | undefined;
    /** Specifies if the user has a MyAnalytics license assigned. */
    private _hasLicense?: boolean | undefined;
    /** Specifies if the user opted out of MyAnalytics. */
    private _hasOptedOut?: boolean | undefined;
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
     * Instantiates a new settings and sets the default values.
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
            "hasGraphMailbox": n => { this.hasGraphMailbox = n.getBooleanValue(); },
            "hasLicense": n => { this.hasLicense = n.getBooleanValue(); },
            "hasOptedOut": n => { this.hasOptedOut = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the hasGraphMailbox property value. Specifies if the user's primary mailbox is hosted in the cloud and is enabled for Microsoft Graph.
     * @returns a boolean
     */
    public get hasGraphMailbox() {
        return this._hasGraphMailbox;
    };
    /**
     * Sets the hasGraphMailbox property value. Specifies if the user's primary mailbox is hosted in the cloud and is enabled for Microsoft Graph.
     * @param value Value to set for the hasGraphMailbox property.
     */
    public set hasGraphMailbox(value: boolean | undefined) {
        this._hasGraphMailbox = value;
    };
    /**
     * Gets the hasLicense property value. Specifies if the user has a MyAnalytics license assigned.
     * @returns a boolean
     */
    public get hasLicense() {
        return this._hasLicense;
    };
    /**
     * Sets the hasLicense property value. Specifies if the user has a MyAnalytics license assigned.
     * @param value Value to set for the hasLicense property.
     */
    public set hasLicense(value: boolean | undefined) {
        this._hasLicense = value;
    };
    /**
     * Gets the hasOptedOut property value. Specifies if the user opted out of MyAnalytics.
     * @returns a boolean
     */
    public get hasOptedOut() {
        return this._hasOptedOut;
    };
    /**
     * Sets the hasOptedOut property value. Specifies if the user opted out of MyAnalytics.
     * @param value Value to set for the hasOptedOut property.
     */
    public set hasOptedOut(value: boolean | undefined) {
        this._hasOptedOut = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("hasGraphMailbox", this.hasGraphMailbox);
        writer.writeBooleanValue("hasLicense", this.hasLicense);
        writer.writeBooleanValue("hasOptedOut", this.hasOptedOut);
        writer.writeAdditionalData(this.additionalData);
    };
}
