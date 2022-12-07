import {ConfigurationManagerClientState} from './configurationManagerClientState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Configuration manager client health state */
export class ConfigurationManagerClientHealthState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Error code for failed state. */
    private _errorCode?: number | undefined;
    /** Datetime for last sync with configuration manager management point. */
    private _lastSyncDateTime?: Date | undefined;
    /** Configuration manager client state */
    private _state?: ConfigurationManagerClientState | undefined;
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
     * Instantiates a new configurationManagerClientHealthState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the errorCode property value. Error code for failed state.
     * @returns a integer
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. Error code for failed state.
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: number | undefined) {
        this._errorCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "errorCode": n => { this.errorCode = n.getNumberValue(); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<ConfigurationManagerClientState>(ConfigurationManagerClientState); },
        };
    };
    /**
     * Gets the lastSyncDateTime property value. Datetime for last sync with configuration manager management point.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. Datetime for last sync with configuration manager management point.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("errorCode", this.errorCode);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeEnumValue<ConfigurationManagerClientState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. Configuration manager client state
     * @returns a configurationManagerClientState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Configuration manager client state
     * @param value Value to set for the state property.
     */
    public set state(value: ConfigurationManagerClientState | undefined) {
        this._state = value;
    };
}
