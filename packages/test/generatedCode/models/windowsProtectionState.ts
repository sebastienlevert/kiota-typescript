import {createWindowsDeviceMalwareStateFromDiscriminatorValue} from './createWindowsDeviceMalwareStateFromDiscriminatorValue';
import {Entity, WindowsDeviceMalwareState} from './index';
import {WindowsDefenderProductStatus} from './windowsDefenderProductStatus';
import {WindowsDeviceHealthState} from './windowsDeviceHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device protection status entity. */
export class WindowsProtectionState extends Entity implements Parsable {
    /** Current anti malware version */
    private _antiMalwareVersion?: string | undefined;
    /** Device malware list */
    private _detectedMalwareState?: WindowsDeviceMalwareState[] | undefined;
    /** Computer endpoint protection state */
    private _deviceState?: WindowsDeviceHealthState | undefined;
    /** Current endpoint protection engine's version */
    private _engineVersion?: string | undefined;
    /** Full scan overdue or not? */
    private _fullScanOverdue?: boolean | undefined;
    /** Full scan required or not? */
    private _fullScanRequired?: boolean | undefined;
    /** Indicates whether the device is a virtual machine. */
    private _isVirtualMachine?: boolean | undefined;
    /** Last quick scan datetime */
    private _lastFullScanDateTime?: Date | undefined;
    /** Last full scan signature version */
    private _lastFullScanSignatureVersion?: string | undefined;
    /** Last quick scan datetime */
    private _lastQuickScanDateTime?: Date | undefined;
    /** Last quick scan signature version */
    private _lastQuickScanSignatureVersion?: string | undefined;
    /** Last device health status reported time */
    private _lastReportedDateTime?: Date | undefined;
    /** Anti malware is enabled or not */
    private _malwareProtectionEnabled?: boolean | undefined;
    /** Network inspection system enabled or not? */
    private _networkInspectionSystemEnabled?: boolean | undefined;
    /** Product Status of Windows Defender */
    private _productStatus?: WindowsDefenderProductStatus | undefined;
    /** Quick scan overdue or not? */
    private _quickScanOverdue?: boolean | undefined;
    /** Real time protection is enabled or not? */
    private _realTimeProtectionEnabled?: boolean | undefined;
    /** Reboot required or not? */
    private _rebootRequired?: boolean | undefined;
    /** Signature out of date or not? */
    private _signatureUpdateOverdue?: boolean | undefined;
    /** Current malware definitions version */
    private _signatureVersion?: string | undefined;
    /** Indicates whether the Windows Defender tamper protection feature is enabled. */
    private _tamperProtectionEnabled?: boolean | undefined;
    /**
     * Gets the antiMalwareVersion property value. Current anti malware version
     * @returns a string
     */
    public get antiMalwareVersion() {
        return this._antiMalwareVersion;
    };
    /**
     * Sets the antiMalwareVersion property value. Current anti malware version
     * @param value Value to set for the antiMalwareVersion property.
     */
    public set antiMalwareVersion(value: string | undefined) {
        this._antiMalwareVersion = value;
    };
    /**
     * Instantiates a new windowsProtectionState and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detectedMalwareState property value. Device malware list
     * @returns a windowsDeviceMalwareState
     */
    public get detectedMalwareState() {
        return this._detectedMalwareState;
    };
    /**
     * Sets the detectedMalwareState property value. Device malware list
     * @param value Value to set for the detectedMalwareState property.
     */
    public set detectedMalwareState(value: WindowsDeviceMalwareState[] | undefined) {
        this._detectedMalwareState = value;
    };
    /**
     * Gets the deviceState property value. Computer endpoint protection state
     * @returns a windowsDeviceHealthState
     */
    public get deviceState() {
        return this._deviceState;
    };
    /**
     * Sets the deviceState property value. Computer endpoint protection state
     * @param value Value to set for the deviceState property.
     */
    public set deviceState(value: WindowsDeviceHealthState | undefined) {
        this._deviceState = value;
    };
    /**
     * Gets the engineVersion property value. Current endpoint protection engine's version
     * @returns a string
     */
    public get engineVersion() {
        return this._engineVersion;
    };
    /**
     * Sets the engineVersion property value. Current endpoint protection engine's version
     * @param value Value to set for the engineVersion property.
     */
    public set engineVersion(value: string | undefined) {
        this._engineVersion = value;
    };
    /**
     * Gets the fullScanOverdue property value. Full scan overdue or not?
     * @returns a boolean
     */
    public get fullScanOverdue() {
        return this._fullScanOverdue;
    };
    /**
     * Sets the fullScanOverdue property value. Full scan overdue or not?
     * @param value Value to set for the fullScanOverdue property.
     */
    public set fullScanOverdue(value: boolean | undefined) {
        this._fullScanOverdue = value;
    };
    /**
     * Gets the fullScanRequired property value. Full scan required or not?
     * @returns a boolean
     */
    public get fullScanRequired() {
        return this._fullScanRequired;
    };
    /**
     * Sets the fullScanRequired property value. Full scan required or not?
     * @param value Value to set for the fullScanRequired property.
     */
    public set fullScanRequired(value: boolean | undefined) {
        this._fullScanRequired = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "antiMalwareVersion": n => { this.antiMalwareVersion = n.getStringValue(); },
            "detectedMalwareState": n => { this.detectedMalwareState = n.getCollectionOfObjectValues<WindowsDeviceMalwareState>(createWindowsDeviceMalwareStateFromDiscriminatorValue); },
            "deviceState": n => { this.deviceState = n.getEnumValue<WindowsDeviceHealthState>(WindowsDeviceHealthState); },
            "engineVersion": n => { this.engineVersion = n.getStringValue(); },
            "fullScanOverdue": n => { this.fullScanOverdue = n.getBooleanValue(); },
            "fullScanRequired": n => { this.fullScanRequired = n.getBooleanValue(); },
            "isVirtualMachine": n => { this.isVirtualMachine = n.getBooleanValue(); },
            "lastFullScanDateTime": n => { this.lastFullScanDateTime = n.getDateValue(); },
            "lastFullScanSignatureVersion": n => { this.lastFullScanSignatureVersion = n.getStringValue(); },
            "lastQuickScanDateTime": n => { this.lastQuickScanDateTime = n.getDateValue(); },
            "lastQuickScanSignatureVersion": n => { this.lastQuickScanSignatureVersion = n.getStringValue(); },
            "lastReportedDateTime": n => { this.lastReportedDateTime = n.getDateValue(); },
            "malwareProtectionEnabled": n => { this.malwareProtectionEnabled = n.getBooleanValue(); },
            "networkInspectionSystemEnabled": n => { this.networkInspectionSystemEnabled = n.getBooleanValue(); },
            "productStatus": n => { this.productStatus = n.getEnumValue<WindowsDefenderProductStatus>(WindowsDefenderProductStatus); },
            "quickScanOverdue": n => { this.quickScanOverdue = n.getBooleanValue(); },
            "realTimeProtectionEnabled": n => { this.realTimeProtectionEnabled = n.getBooleanValue(); },
            "rebootRequired": n => { this.rebootRequired = n.getBooleanValue(); },
            "signatureUpdateOverdue": n => { this.signatureUpdateOverdue = n.getBooleanValue(); },
            "signatureVersion": n => { this.signatureVersion = n.getStringValue(); },
            "tamperProtectionEnabled": n => { this.tamperProtectionEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isVirtualMachine property value. Indicates whether the device is a virtual machine.
     * @returns a boolean
     */
    public get isVirtualMachine() {
        return this._isVirtualMachine;
    };
    /**
     * Sets the isVirtualMachine property value. Indicates whether the device is a virtual machine.
     * @param value Value to set for the isVirtualMachine property.
     */
    public set isVirtualMachine(value: boolean | undefined) {
        this._isVirtualMachine = value;
    };
    /**
     * Gets the lastFullScanDateTime property value. Last quick scan datetime
     * @returns a Date
     */
    public get lastFullScanDateTime() {
        return this._lastFullScanDateTime;
    };
    /**
     * Sets the lastFullScanDateTime property value. Last quick scan datetime
     * @param value Value to set for the lastFullScanDateTime property.
     */
    public set lastFullScanDateTime(value: Date | undefined) {
        this._lastFullScanDateTime = value;
    };
    /**
     * Gets the lastFullScanSignatureVersion property value. Last full scan signature version
     * @returns a string
     */
    public get lastFullScanSignatureVersion() {
        return this._lastFullScanSignatureVersion;
    };
    /**
     * Sets the lastFullScanSignatureVersion property value. Last full scan signature version
     * @param value Value to set for the lastFullScanSignatureVersion property.
     */
    public set lastFullScanSignatureVersion(value: string | undefined) {
        this._lastFullScanSignatureVersion = value;
    };
    /**
     * Gets the lastQuickScanDateTime property value. Last quick scan datetime
     * @returns a Date
     */
    public get lastQuickScanDateTime() {
        return this._lastQuickScanDateTime;
    };
    /**
     * Sets the lastQuickScanDateTime property value. Last quick scan datetime
     * @param value Value to set for the lastQuickScanDateTime property.
     */
    public set lastQuickScanDateTime(value: Date | undefined) {
        this._lastQuickScanDateTime = value;
    };
    /**
     * Gets the lastQuickScanSignatureVersion property value. Last quick scan signature version
     * @returns a string
     */
    public get lastQuickScanSignatureVersion() {
        return this._lastQuickScanSignatureVersion;
    };
    /**
     * Sets the lastQuickScanSignatureVersion property value. Last quick scan signature version
     * @param value Value to set for the lastQuickScanSignatureVersion property.
     */
    public set lastQuickScanSignatureVersion(value: string | undefined) {
        this._lastQuickScanSignatureVersion = value;
    };
    /**
     * Gets the lastReportedDateTime property value. Last device health status reported time
     * @returns a Date
     */
    public get lastReportedDateTime() {
        return this._lastReportedDateTime;
    };
    /**
     * Sets the lastReportedDateTime property value. Last device health status reported time
     * @param value Value to set for the lastReportedDateTime property.
     */
    public set lastReportedDateTime(value: Date | undefined) {
        this._lastReportedDateTime = value;
    };
    /**
     * Gets the malwareProtectionEnabled property value. Anti malware is enabled or not
     * @returns a boolean
     */
    public get malwareProtectionEnabled() {
        return this._malwareProtectionEnabled;
    };
    /**
     * Sets the malwareProtectionEnabled property value. Anti malware is enabled or not
     * @param value Value to set for the malwareProtectionEnabled property.
     */
    public set malwareProtectionEnabled(value: boolean | undefined) {
        this._malwareProtectionEnabled = value;
    };
    /**
     * Gets the networkInspectionSystemEnabled property value. Network inspection system enabled or not?
     * @returns a boolean
     */
    public get networkInspectionSystemEnabled() {
        return this._networkInspectionSystemEnabled;
    };
    /**
     * Sets the networkInspectionSystemEnabled property value. Network inspection system enabled or not?
     * @param value Value to set for the networkInspectionSystemEnabled property.
     */
    public set networkInspectionSystemEnabled(value: boolean | undefined) {
        this._networkInspectionSystemEnabled = value;
    };
    /**
     * Gets the productStatus property value. Product Status of Windows Defender
     * @returns a windowsDefenderProductStatus
     */
    public get productStatus() {
        return this._productStatus;
    };
    /**
     * Sets the productStatus property value. Product Status of Windows Defender
     * @param value Value to set for the productStatus property.
     */
    public set productStatus(value: WindowsDefenderProductStatus | undefined) {
        this._productStatus = value;
    };
    /**
     * Gets the quickScanOverdue property value. Quick scan overdue or not?
     * @returns a boolean
     */
    public get quickScanOverdue() {
        return this._quickScanOverdue;
    };
    /**
     * Sets the quickScanOverdue property value. Quick scan overdue or not?
     * @param value Value to set for the quickScanOverdue property.
     */
    public set quickScanOverdue(value: boolean | undefined) {
        this._quickScanOverdue = value;
    };
    /**
     * Gets the realTimeProtectionEnabled property value. Real time protection is enabled or not?
     * @returns a boolean
     */
    public get realTimeProtectionEnabled() {
        return this._realTimeProtectionEnabled;
    };
    /**
     * Sets the realTimeProtectionEnabled property value. Real time protection is enabled or not?
     * @param value Value to set for the realTimeProtectionEnabled property.
     */
    public set realTimeProtectionEnabled(value: boolean | undefined) {
        this._realTimeProtectionEnabled = value;
    };
    /**
     * Gets the rebootRequired property value. Reboot required or not?
     * @returns a boolean
     */
    public get rebootRequired() {
        return this._rebootRequired;
    };
    /**
     * Sets the rebootRequired property value. Reboot required or not?
     * @param value Value to set for the rebootRequired property.
     */
    public set rebootRequired(value: boolean | undefined) {
        this._rebootRequired = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("antiMalwareVersion", this.antiMalwareVersion);
        writer.writeCollectionOfObjectValues<WindowsDeviceMalwareState>("detectedMalwareState", this.detectedMalwareState);
        writer.writeEnumValue<WindowsDeviceHealthState>("deviceState", this.deviceState);
        writer.writeStringValue("engineVersion", this.engineVersion);
        writer.writeBooleanValue("fullScanOverdue", this.fullScanOverdue);
        writer.writeBooleanValue("fullScanRequired", this.fullScanRequired);
        writer.writeBooleanValue("isVirtualMachine", this.isVirtualMachine);
        writer.writeDateValue("lastFullScanDateTime", this.lastFullScanDateTime);
        writer.writeStringValue("lastFullScanSignatureVersion", this.lastFullScanSignatureVersion);
        writer.writeDateValue("lastQuickScanDateTime", this.lastQuickScanDateTime);
        writer.writeStringValue("lastQuickScanSignatureVersion", this.lastQuickScanSignatureVersion);
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        writer.writeBooleanValue("malwareProtectionEnabled", this.malwareProtectionEnabled);
        writer.writeBooleanValue("networkInspectionSystemEnabled", this.networkInspectionSystemEnabled);
        writer.writeEnumValue<WindowsDefenderProductStatus>("productStatus", this.productStatus);
        writer.writeBooleanValue("quickScanOverdue", this.quickScanOverdue);
        writer.writeBooleanValue("realTimeProtectionEnabled", this.realTimeProtectionEnabled);
        writer.writeBooleanValue("rebootRequired", this.rebootRequired);
        writer.writeBooleanValue("signatureUpdateOverdue", this.signatureUpdateOverdue);
        writer.writeStringValue("signatureVersion", this.signatureVersion);
        writer.writeBooleanValue("tamperProtectionEnabled", this.tamperProtectionEnabled);
    };
    /**
     * Gets the signatureUpdateOverdue property value. Signature out of date or not?
     * @returns a boolean
     */
    public get signatureUpdateOverdue() {
        return this._signatureUpdateOverdue;
    };
    /**
     * Sets the signatureUpdateOverdue property value. Signature out of date or not?
     * @param value Value to set for the signatureUpdateOverdue property.
     */
    public set signatureUpdateOverdue(value: boolean | undefined) {
        this._signatureUpdateOverdue = value;
    };
    /**
     * Gets the signatureVersion property value. Current malware definitions version
     * @returns a string
     */
    public get signatureVersion() {
        return this._signatureVersion;
    };
    /**
     * Sets the signatureVersion property value. Current malware definitions version
     * @param value Value to set for the signatureVersion property.
     */
    public set signatureVersion(value: string | undefined) {
        this._signatureVersion = value;
    };
    /**
     * Gets the tamperProtectionEnabled property value. Indicates whether the Windows Defender tamper protection feature is enabled.
     * @returns a boolean
     */
    public get tamperProtectionEnabled() {
        return this._tamperProtectionEnabled;
    };
    /**
     * Sets the tamperProtectionEnabled property value. Indicates whether the Windows Defender tamper protection feature is enabled.
     * @param value Value to set for the tamperProtectionEnabled property.
     */
    public set tamperProtectionEnabled(value: boolean | undefined) {
        this._tamperProtectionEnabled = value;
    };
}
