import {CloudPcPartnerAgentInstallStatus} from './cloudPcPartnerAgentInstallStatus';
import {CloudPcPartnerAgentName} from './cloudPcPartnerAgentName';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudPcPartnerAgentInstallResult implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The installStatus property */
    private _installStatus?: CloudPcPartnerAgentInstallStatus | undefined;
    /** The isThirdPartyPartner property */
    private _isThirdPartyPartner?: boolean | undefined;
    /** The partnerAgentName property */
    private _partnerAgentName?: CloudPcPartnerAgentName | undefined;
    /** The retriable property */
    private _retriable?: boolean | undefined;
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
     * Instantiates a new cloudPcPartnerAgentInstallResult and sets the default values.
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
            "installStatus": n => { this.installStatus = n.getEnumValue<CloudPcPartnerAgentInstallStatus>(CloudPcPartnerAgentInstallStatus); },
            "isThirdPartyPartner": n => { this.isThirdPartyPartner = n.getBooleanValue(); },
            "partnerAgentName": n => { this.partnerAgentName = n.getEnumValue<CloudPcPartnerAgentName>(CloudPcPartnerAgentName); },
            "retriable": n => { this.retriable = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the installStatus property value. The installStatus property
     * @returns a cloudPcPartnerAgentInstallStatus
     */
    public get installStatus() {
        return this._installStatus;
    };
    /**
     * Sets the installStatus property value. The installStatus property
     * @param value Value to set for the installStatus property.
     */
    public set installStatus(value: CloudPcPartnerAgentInstallStatus | undefined) {
        this._installStatus = value;
    };
    /**
     * Gets the isThirdPartyPartner property value. The isThirdPartyPartner property
     * @returns a boolean
     */
    public get isThirdPartyPartner() {
        return this._isThirdPartyPartner;
    };
    /**
     * Sets the isThirdPartyPartner property value. The isThirdPartyPartner property
     * @param value Value to set for the isThirdPartyPartner property.
     */
    public set isThirdPartyPartner(value: boolean | undefined) {
        this._isThirdPartyPartner = value;
    };
    /**
     * Gets the partnerAgentName property value. The partnerAgentName property
     * @returns a cloudPcPartnerAgentName
     */
    public get partnerAgentName() {
        return this._partnerAgentName;
    };
    /**
     * Sets the partnerAgentName property value. The partnerAgentName property
     * @param value Value to set for the partnerAgentName property.
     */
    public set partnerAgentName(value: CloudPcPartnerAgentName | undefined) {
        this._partnerAgentName = value;
    };
    /**
     * Gets the retriable property value. The retriable property
     * @returns a boolean
     */
    public get retriable() {
        return this._retriable;
    };
    /**
     * Sets the retriable property value. The retriable property
     * @param value Value to set for the retriable property.
     */
    public set retriable(value: boolean | undefined) {
        this._retriable = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<CloudPcPartnerAgentInstallStatus>("installStatus", this.installStatus);
        writer.writeBooleanValue("isThirdPartyPartner", this.isThirdPartyPartner);
        writer.writeEnumValue<CloudPcPartnerAgentName>("partnerAgentName", this.partnerAgentName);
        writer.writeBooleanValue("retriable", this.retriable);
        writer.writeAdditionalData(this.additionalData);
    };
}
