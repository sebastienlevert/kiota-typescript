import {createSharedAppleDeviceUserFromDiscriminatorValue} from './createSharedAppleDeviceUserFromDiscriminatorValue';
import {DeviceGuardLocalSystemAuthorityCredentialGuardState} from './deviceGuardLocalSystemAuthorityCredentialGuardState';
import {DeviceGuardVirtualizationBasedSecurityHardwareRequirementState} from './deviceGuardVirtualizationBasedSecurityHardwareRequirementState';
import {DeviceGuardVirtualizationBasedSecurityState} from './deviceGuardVirtualizationBasedSecurityState';
import {DeviceLicensingStatus} from './deviceLicensingStatus';
import {SharedAppleDeviceUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Hardware information of a given device. */
export class HardwareInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The number of charge cycles the device’s current battery has gone through. Valid values 0 to 2147483647 */
    private _batteryChargeCycles?: number | undefined;
    /** The device’s current battery’s health percentage. Valid values 0 to 100 */
    private _batteryHealthPercentage?: number | undefined;
    /** The battery level, between 0.0 and 100, or null if the battery level cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 5.0 and later, and is available only when Device Information access right is obtained. Valid values 0 to 100 */
    private _batteryLevelPercentage?: number | undefined;
    /** The serial number of the device’s current battery */
    private _batterySerialNumber?: string | undefined;
    /** Cellular technology of the device */
    private _cellularTechnology?: string | undefined;
    /** Returns the fully qualified domain name of the device (if any). If the device is not domain-joined, it returns an empty string. */
    private _deviceFullQualifiedDomainName?: string | undefined;
    /** The deviceGuardLocalSystemAuthorityCredentialGuardState property */
    private _deviceGuardLocalSystemAuthorityCredentialGuardState?: DeviceGuardLocalSystemAuthorityCredentialGuardState | undefined;
    /** The deviceGuardVirtualizationBasedSecurityHardwareRequirementState property */
    private _deviceGuardVirtualizationBasedSecurityHardwareRequirementState?: DeviceGuardVirtualizationBasedSecurityHardwareRequirementState | undefined;
    /** The deviceGuardVirtualizationBasedSecurityState property */
    private _deviceGuardVirtualizationBasedSecurityState?: DeviceGuardVirtualizationBasedSecurityState | undefined;
    /** A standard error code indicating the last error, or 0 indicating no error (default). The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing. Valid values 0 to 2147483647 */
    private _deviceLicensingLastErrorCode?: number | undefined;
    /** Error text message as a descripition for deviceLicensingLastErrorCode. The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing. */
    private _deviceLicensingLastErrorDescription?: string | undefined;
    /** Indicates the device licensing status after Windows device based subscription has been enabled. */
    private _deviceLicensingStatus?: DeviceLicensingStatus | undefined;
    /** eSIM identifier */
    private _esimIdentifier?: string | undefined;
    /** Free storage space of the device. */
    private _freeStorageSpace?: number | undefined;
    /** IMEI */
    private _imei?: string | undefined;
    /** IPAddressV4 */
    private _ipAddressV4?: string | undefined;
    /** Encryption status of the device */
    private _isEncrypted?: boolean | undefined;
    /** Shared iPad */
    private _isSharedDevice?: boolean | undefined;
    /** Supervised mode of the device */
    private _isSupervised?: boolean | undefined;
    /** Manufacturer of the device */
    private _manufacturer?: string | undefined;
    /** MEID */
    private _meid?: string | undefined;
    /** Model of the device */
    private _model?: string | undefined;
    /** String that specifies the OS edition. */
    private _operatingSystemEdition?: string | undefined;
    /** Operating system language of the device */
    private _operatingSystemLanguage?: string | undefined;
    /** Int that specifies the Windows Operating System ProductType. More details here https://go.microsoft.com/fwlink/?linkid=2126950. Valid values 0 to 2147483647 */
    private _operatingSystemProductType?: number | undefined;
    /** Operating System Build Number on Android device */
    private _osBuildNumber?: string | undefined;
    /** Phone number of the device */
    private _phoneNumber?: string | undefined;
    /** The product name, e.g. iPad8,12 etc. The update frequency of this property is weekly. Note this property is currently supported only on iOS/MacOS devices, and is available only when Device Information access right is obtained. */
    private _productName?: string | undefined;
    /** The number of users currently on this device, or null (default) if the value of this property cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 13.4 and later, and is available only when Device Information access right is obtained. Valid values 0 to 2147483647 */
    private _residentUsersCount?: number | undefined;
    /** Serial number. */
    private _serialNumber?: string | undefined;
    /** All users on the shared Apple device */
    private _sharedDeviceCachedUsers?: SharedAppleDeviceUser[] | undefined;
    /** SubnetAddress */
    private _subnetAddress?: string | undefined;
    /** Subscriber carrier of the device */
    private _subscriberCarrier?: string | undefined;
    /** BIOS version as reported by SMBIOS */
    private _systemManagementBIOSVersion?: string | undefined;
    /** Total storage space of the device. */
    private _totalStorageSpace?: number | undefined;
    /** The identifying information that uniquely names the TPM manufacturer */
    private _tpmManufacturer?: string | undefined;
    /** String that specifies the specification version. */
    private _tpmSpecificationVersion?: string | undefined;
    /** The version of the TPM, as specified by the manufacturer */
    private _tpmVersion?: string | undefined;
    /** WiFi MAC address of the device */
    private _wifiMac?: string | undefined;
    /** A list of wired IPv4 addresses. The update frequency (the maximum delay for the change of property value to be synchronized from the device to the cloud storage) of this property is daily. Note this property is currently supported only on devices running on Windows. */
    private _wiredIPv4Addresses?: string[] | undefined;
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
     * Gets the batteryChargeCycles property value. The number of charge cycles the device’s current battery has gone through. Valid values 0 to 2147483647
     * @returns a integer
     */
    public get batteryChargeCycles() {
        return this._batteryChargeCycles;
    };
    /**
     * Sets the batteryChargeCycles property value. The number of charge cycles the device’s current battery has gone through. Valid values 0 to 2147483647
     * @param value Value to set for the batteryChargeCycles property.
     */
    public set batteryChargeCycles(value: number | undefined) {
        this._batteryChargeCycles = value;
    };
    /**
     * Gets the batteryHealthPercentage property value. The device’s current battery’s health percentage. Valid values 0 to 100
     * @returns a integer
     */
    public get batteryHealthPercentage() {
        return this._batteryHealthPercentage;
    };
    /**
     * Sets the batteryHealthPercentage property value. The device’s current battery’s health percentage. Valid values 0 to 100
     * @param value Value to set for the batteryHealthPercentage property.
     */
    public set batteryHealthPercentage(value: number | undefined) {
        this._batteryHealthPercentage = value;
    };
    /**
     * Gets the batteryLevelPercentage property value. The battery level, between 0.0 and 100, or null if the battery level cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 5.0 and later, and is available only when Device Information access right is obtained. Valid values 0 to 100
     * @returns a double
     */
    public get batteryLevelPercentage() {
        return this._batteryLevelPercentage;
    };
    /**
     * Sets the batteryLevelPercentage property value. The battery level, between 0.0 and 100, or null if the battery level cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 5.0 and later, and is available only when Device Information access right is obtained. Valid values 0 to 100
     * @param value Value to set for the batteryLevelPercentage property.
     */
    public set batteryLevelPercentage(value: number | undefined) {
        this._batteryLevelPercentage = value;
    };
    /**
     * Gets the batterySerialNumber property value. The serial number of the device’s current battery
     * @returns a string
     */
    public get batterySerialNumber() {
        return this._batterySerialNumber;
    };
    /**
     * Sets the batterySerialNumber property value. The serial number of the device’s current battery
     * @param value Value to set for the batterySerialNumber property.
     */
    public set batterySerialNumber(value: string | undefined) {
        this._batterySerialNumber = value;
    };
    /**
     * Gets the cellularTechnology property value. Cellular technology of the device
     * @returns a string
     */
    public get cellularTechnology() {
        return this._cellularTechnology;
    };
    /**
     * Sets the cellularTechnology property value. Cellular technology of the device
     * @param value Value to set for the cellularTechnology property.
     */
    public set cellularTechnology(value: string | undefined) {
        this._cellularTechnology = value;
    };
    /**
     * Instantiates a new hardwareInformation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deviceFullQualifiedDomainName property value. Returns the fully qualified domain name of the device (if any). If the device is not domain-joined, it returns an empty string.
     * @returns a string
     */
    public get deviceFullQualifiedDomainName() {
        return this._deviceFullQualifiedDomainName;
    };
    /**
     * Sets the deviceFullQualifiedDomainName property value. Returns the fully qualified domain name of the device (if any). If the device is not domain-joined, it returns an empty string.
     * @param value Value to set for the deviceFullQualifiedDomainName property.
     */
    public set deviceFullQualifiedDomainName(value: string | undefined) {
        this._deviceFullQualifiedDomainName = value;
    };
    /**
     * Gets the deviceGuardLocalSystemAuthorityCredentialGuardState property value. The deviceGuardLocalSystemAuthorityCredentialGuardState property
     * @returns a deviceGuardLocalSystemAuthorityCredentialGuardState
     */
    public get deviceGuardLocalSystemAuthorityCredentialGuardState() {
        return this._deviceGuardLocalSystemAuthorityCredentialGuardState;
    };
    /**
     * Sets the deviceGuardLocalSystemAuthorityCredentialGuardState property value. The deviceGuardLocalSystemAuthorityCredentialGuardState property
     * @param value Value to set for the deviceGuardLocalSystemAuthorityCredentialGuardState property.
     */
    public set deviceGuardLocalSystemAuthorityCredentialGuardState(value: DeviceGuardLocalSystemAuthorityCredentialGuardState | undefined) {
        this._deviceGuardLocalSystemAuthorityCredentialGuardState = value;
    };
    /**
     * Gets the deviceGuardVirtualizationBasedSecurityHardwareRequirementState property value. The deviceGuardVirtualizationBasedSecurityHardwareRequirementState property
     * @returns a deviceGuardVirtualizationBasedSecurityHardwareRequirementState
     */
    public get deviceGuardVirtualizationBasedSecurityHardwareRequirementState() {
        return this._deviceGuardVirtualizationBasedSecurityHardwareRequirementState;
    };
    /**
     * Sets the deviceGuardVirtualizationBasedSecurityHardwareRequirementState property value. The deviceGuardVirtualizationBasedSecurityHardwareRequirementState property
     * @param value Value to set for the deviceGuardVirtualizationBasedSecurityHardwareRequirementState property.
     */
    public set deviceGuardVirtualizationBasedSecurityHardwareRequirementState(value: DeviceGuardVirtualizationBasedSecurityHardwareRequirementState | undefined) {
        this._deviceGuardVirtualizationBasedSecurityHardwareRequirementState = value;
    };
    /**
     * Gets the deviceGuardVirtualizationBasedSecurityState property value. The deviceGuardVirtualizationBasedSecurityState property
     * @returns a deviceGuardVirtualizationBasedSecurityState
     */
    public get deviceGuardVirtualizationBasedSecurityState() {
        return this._deviceGuardVirtualizationBasedSecurityState;
    };
    /**
     * Sets the deviceGuardVirtualizationBasedSecurityState property value. The deviceGuardVirtualizationBasedSecurityState property
     * @param value Value to set for the deviceGuardVirtualizationBasedSecurityState property.
     */
    public set deviceGuardVirtualizationBasedSecurityState(value: DeviceGuardVirtualizationBasedSecurityState | undefined) {
        this._deviceGuardVirtualizationBasedSecurityState = value;
    };
    /**
     * Gets the deviceLicensingLastErrorCode property value. A standard error code indicating the last error, or 0 indicating no error (default). The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing. Valid values 0 to 2147483647
     * @returns a integer
     */
    public get deviceLicensingLastErrorCode() {
        return this._deviceLicensingLastErrorCode;
    };
    /**
     * Sets the deviceLicensingLastErrorCode property value. A standard error code indicating the last error, or 0 indicating no error (default). The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing. Valid values 0 to 2147483647
     * @param value Value to set for the deviceLicensingLastErrorCode property.
     */
    public set deviceLicensingLastErrorCode(value: number | undefined) {
        this._deviceLicensingLastErrorCode = value;
    };
    /**
     * Gets the deviceLicensingLastErrorDescription property value. Error text message as a descripition for deviceLicensingLastErrorCode. The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing.
     * @returns a string
     */
    public get deviceLicensingLastErrorDescription() {
        return this._deviceLicensingLastErrorDescription;
    };
    /**
     * Sets the deviceLicensingLastErrorDescription property value. Error text message as a descripition for deviceLicensingLastErrorCode. The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing.
     * @param value Value to set for the deviceLicensingLastErrorDescription property.
     */
    public set deviceLicensingLastErrorDescription(value: string | undefined) {
        this._deviceLicensingLastErrorDescription = value;
    };
    /**
     * Gets the deviceLicensingStatus property value. Indicates the device licensing status after Windows device based subscription has been enabled.
     * @returns a deviceLicensingStatus
     */
    public get deviceLicensingStatus() {
        return this._deviceLicensingStatus;
    };
    /**
     * Sets the deviceLicensingStatus property value. Indicates the device licensing status after Windows device based subscription has been enabled.
     * @param value Value to set for the deviceLicensingStatus property.
     */
    public set deviceLicensingStatus(value: DeviceLicensingStatus | undefined) {
        this._deviceLicensingStatus = value;
    };
    /**
     * Gets the esimIdentifier property value. eSIM identifier
     * @returns a string
     */
    public get esimIdentifier() {
        return this._esimIdentifier;
    };
    /**
     * Sets the esimIdentifier property value. eSIM identifier
     * @param value Value to set for the esimIdentifier property.
     */
    public set esimIdentifier(value: string | undefined) {
        this._esimIdentifier = value;
    };
    /**
     * Gets the freeStorageSpace property value. Free storage space of the device.
     * @returns a int64
     */
    public get freeStorageSpace() {
        return this._freeStorageSpace;
    };
    /**
     * Sets the freeStorageSpace property value. Free storage space of the device.
     * @param value Value to set for the freeStorageSpace property.
     */
    public set freeStorageSpace(value: number | undefined) {
        this._freeStorageSpace = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "batteryChargeCycles": n => { this.batteryChargeCycles = n.getNumberValue(); },
            "batteryHealthPercentage": n => { this.batteryHealthPercentage = n.getNumberValue(); },
            "batteryLevelPercentage": n => { this.batteryLevelPercentage = n.getNumberValue(); },
            "batterySerialNumber": n => { this.batterySerialNumber = n.getStringValue(); },
            "cellularTechnology": n => { this.cellularTechnology = n.getStringValue(); },
            "deviceFullQualifiedDomainName": n => { this.deviceFullQualifiedDomainName = n.getStringValue(); },
            "deviceGuardLocalSystemAuthorityCredentialGuardState": n => { this.deviceGuardLocalSystemAuthorityCredentialGuardState = n.getEnumValue<DeviceGuardLocalSystemAuthorityCredentialGuardState>(DeviceGuardLocalSystemAuthorityCredentialGuardState); },
            "deviceGuardVirtualizationBasedSecurityHardwareRequirementState": n => { this.deviceGuardVirtualizationBasedSecurityHardwareRequirementState = n.getEnumValue<DeviceGuardVirtualizationBasedSecurityHardwareRequirementState>(DeviceGuardVirtualizationBasedSecurityHardwareRequirementState); },
            "deviceGuardVirtualizationBasedSecurityState": n => { this.deviceGuardVirtualizationBasedSecurityState = n.getEnumValue<DeviceGuardVirtualizationBasedSecurityState>(DeviceGuardVirtualizationBasedSecurityState); },
            "deviceLicensingLastErrorCode": n => { this.deviceLicensingLastErrorCode = n.getNumberValue(); },
            "deviceLicensingLastErrorDescription": n => { this.deviceLicensingLastErrorDescription = n.getStringValue(); },
            "deviceLicensingStatus": n => { this.deviceLicensingStatus = n.getEnumValue<DeviceLicensingStatus>(DeviceLicensingStatus); },
            "esimIdentifier": n => { this.esimIdentifier = n.getStringValue(); },
            "freeStorageSpace": n => { this.freeStorageSpace = n.getNumberValue(); },
            "imei": n => { this.imei = n.getStringValue(); },
            "ipAddressV4": n => { this.ipAddressV4 = n.getStringValue(); },
            "isEncrypted": n => { this.isEncrypted = n.getBooleanValue(); },
            "isSharedDevice": n => { this.isSharedDevice = n.getBooleanValue(); },
            "isSupervised": n => { this.isSupervised = n.getBooleanValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "meid": n => { this.meid = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "operatingSystemEdition": n => { this.operatingSystemEdition = n.getStringValue(); },
            "operatingSystemLanguage": n => { this.operatingSystemLanguage = n.getStringValue(); },
            "operatingSystemProductType": n => { this.operatingSystemProductType = n.getNumberValue(); },
            "osBuildNumber": n => { this.osBuildNumber = n.getStringValue(); },
            "phoneNumber": n => { this.phoneNumber = n.getStringValue(); },
            "productName": n => { this.productName = n.getStringValue(); },
            "residentUsersCount": n => { this.residentUsersCount = n.getNumberValue(); },
            "serialNumber": n => { this.serialNumber = n.getStringValue(); },
            "sharedDeviceCachedUsers": n => { this.sharedDeviceCachedUsers = n.getCollectionOfObjectValues<SharedAppleDeviceUser>(createSharedAppleDeviceUserFromDiscriminatorValue); },
            "subnetAddress": n => { this.subnetAddress = n.getStringValue(); },
            "subscriberCarrier": n => { this.subscriberCarrier = n.getStringValue(); },
            "systemManagementBIOSVersion": n => { this.systemManagementBIOSVersion = n.getStringValue(); },
            "totalStorageSpace": n => { this.totalStorageSpace = n.getNumberValue(); },
            "tpmManufacturer": n => { this.tpmManufacturer = n.getStringValue(); },
            "tpmSpecificationVersion": n => { this.tpmSpecificationVersion = n.getStringValue(); },
            "tpmVersion": n => { this.tpmVersion = n.getStringValue(); },
            "wifiMac": n => { this.wifiMac = n.getStringValue(); },
            "wiredIPv4Addresses": n => { this.wiredIPv4Addresses = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the imei property value. IMEI
     * @returns a string
     */
    public get imei() {
        return this._imei;
    };
    /**
     * Sets the imei property value. IMEI
     * @param value Value to set for the imei property.
     */
    public set imei(value: string | undefined) {
        this._imei = value;
    };
    /**
     * Gets the ipAddressV4 property value. IPAddressV4
     * @returns a string
     */
    public get ipAddressV4() {
        return this._ipAddressV4;
    };
    /**
     * Sets the ipAddressV4 property value. IPAddressV4
     * @param value Value to set for the ipAddressV4 property.
     */
    public set ipAddressV4(value: string | undefined) {
        this._ipAddressV4 = value;
    };
    /**
     * Gets the isEncrypted property value. Encryption status of the device
     * @returns a boolean
     */
    public get isEncrypted() {
        return this._isEncrypted;
    };
    /**
     * Sets the isEncrypted property value. Encryption status of the device
     * @param value Value to set for the isEncrypted property.
     */
    public set isEncrypted(value: boolean | undefined) {
        this._isEncrypted = value;
    };
    /**
     * Gets the isSharedDevice property value. Shared iPad
     * @returns a boolean
     */
    public get isSharedDevice() {
        return this._isSharedDevice;
    };
    /**
     * Sets the isSharedDevice property value. Shared iPad
     * @param value Value to set for the isSharedDevice property.
     */
    public set isSharedDevice(value: boolean | undefined) {
        this._isSharedDevice = value;
    };
    /**
     * Gets the isSupervised property value. Supervised mode of the device
     * @returns a boolean
     */
    public get isSupervised() {
        return this._isSupervised;
    };
    /**
     * Sets the isSupervised property value. Supervised mode of the device
     * @param value Value to set for the isSupervised property.
     */
    public set isSupervised(value: boolean | undefined) {
        this._isSupervised = value;
    };
    /**
     * Gets the manufacturer property value. Manufacturer of the device
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. Manufacturer of the device
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the meid property value. MEID
     * @returns a string
     */
    public get meid() {
        return this._meid;
    };
    /**
     * Sets the meid property value. MEID
     * @param value Value to set for the meid property.
     */
    public set meid(value: string | undefined) {
        this._meid = value;
    };
    /**
     * Gets the model property value. Model of the device
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. Model of the device
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the operatingSystemEdition property value. String that specifies the OS edition.
     * @returns a string
     */
    public get operatingSystemEdition() {
        return this._operatingSystemEdition;
    };
    /**
     * Sets the operatingSystemEdition property value. String that specifies the OS edition.
     * @param value Value to set for the operatingSystemEdition property.
     */
    public set operatingSystemEdition(value: string | undefined) {
        this._operatingSystemEdition = value;
    };
    /**
     * Gets the operatingSystemLanguage property value. Operating system language of the device
     * @returns a string
     */
    public get operatingSystemLanguage() {
        return this._operatingSystemLanguage;
    };
    /**
     * Sets the operatingSystemLanguage property value. Operating system language of the device
     * @param value Value to set for the operatingSystemLanguage property.
     */
    public set operatingSystemLanguage(value: string | undefined) {
        this._operatingSystemLanguage = value;
    };
    /**
     * Gets the operatingSystemProductType property value. Int that specifies the Windows Operating System ProductType. More details here https://go.microsoft.com/fwlink/?linkid=2126950. Valid values 0 to 2147483647
     * @returns a integer
     */
    public get operatingSystemProductType() {
        return this._operatingSystemProductType;
    };
    /**
     * Sets the operatingSystemProductType property value. Int that specifies the Windows Operating System ProductType. More details here https://go.microsoft.com/fwlink/?linkid=2126950. Valid values 0 to 2147483647
     * @param value Value to set for the operatingSystemProductType property.
     */
    public set operatingSystemProductType(value: number | undefined) {
        this._operatingSystemProductType = value;
    };
    /**
     * Gets the osBuildNumber property value. Operating System Build Number on Android device
     * @returns a string
     */
    public get osBuildNumber() {
        return this._osBuildNumber;
    };
    /**
     * Sets the osBuildNumber property value. Operating System Build Number on Android device
     * @param value Value to set for the osBuildNumber property.
     */
    public set osBuildNumber(value: string | undefined) {
        this._osBuildNumber = value;
    };
    /**
     * Gets the phoneNumber property value. Phone number of the device
     * @returns a string
     */
    public get phoneNumber() {
        return this._phoneNumber;
    };
    /**
     * Sets the phoneNumber property value. Phone number of the device
     * @param value Value to set for the phoneNumber property.
     */
    public set phoneNumber(value: string | undefined) {
        this._phoneNumber = value;
    };
    /**
     * Gets the productName property value. The product name, e.g. iPad8,12 etc. The update frequency of this property is weekly. Note this property is currently supported only on iOS/MacOS devices, and is available only when Device Information access right is obtained.
     * @returns a string
     */
    public get productName() {
        return this._productName;
    };
    /**
     * Sets the productName property value. The product name, e.g. iPad8,12 etc. The update frequency of this property is weekly. Note this property is currently supported only on iOS/MacOS devices, and is available only when Device Information access right is obtained.
     * @param value Value to set for the productName property.
     */
    public set productName(value: string | undefined) {
        this._productName = value;
    };
    /**
     * Gets the residentUsersCount property value. The number of users currently on this device, or null (default) if the value of this property cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 13.4 and later, and is available only when Device Information access right is obtained. Valid values 0 to 2147483647
     * @returns a integer
     */
    public get residentUsersCount() {
        return this._residentUsersCount;
    };
    /**
     * Sets the residentUsersCount property value. The number of users currently on this device, or null (default) if the value of this property cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 13.4 and later, and is available only when Device Information access right is obtained. Valid values 0 to 2147483647
     * @param value Value to set for the residentUsersCount property.
     */
    public set residentUsersCount(value: number | undefined) {
        this._residentUsersCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("batteryChargeCycles", this.batteryChargeCycles);
        writer.writeNumberValue("batteryHealthPercentage", this.batteryHealthPercentage);
        writer.writeNumberValue("batteryLevelPercentage", this.batteryLevelPercentage);
        writer.writeStringValue("batterySerialNumber", this.batterySerialNumber);
        writer.writeStringValue("cellularTechnology", this.cellularTechnology);
        writer.writeStringValue("deviceFullQualifiedDomainName", this.deviceFullQualifiedDomainName);
        writer.writeEnumValue<DeviceGuardLocalSystemAuthorityCredentialGuardState>("deviceGuardLocalSystemAuthorityCredentialGuardState", this.deviceGuardLocalSystemAuthorityCredentialGuardState);
        writer.writeEnumValue<DeviceGuardVirtualizationBasedSecurityHardwareRequirementState>("deviceGuardVirtualizationBasedSecurityHardwareRequirementState", this.deviceGuardVirtualizationBasedSecurityHardwareRequirementState);
        writer.writeEnumValue<DeviceGuardVirtualizationBasedSecurityState>("deviceGuardVirtualizationBasedSecurityState", this.deviceGuardVirtualizationBasedSecurityState);
        writer.writeNumberValue("deviceLicensingLastErrorCode", this.deviceLicensingLastErrorCode);
        writer.writeStringValue("deviceLicensingLastErrorDescription", this.deviceLicensingLastErrorDescription);
        writer.writeEnumValue<DeviceLicensingStatus>("deviceLicensingStatus", this.deviceLicensingStatus);
        writer.writeStringValue("esimIdentifier", this.esimIdentifier);
        writer.writeNumberValue("freeStorageSpace", this.freeStorageSpace);
        writer.writeStringValue("imei", this.imei);
        writer.writeStringValue("ipAddressV4", this.ipAddressV4);
        writer.writeBooleanValue("isEncrypted", this.isEncrypted);
        writer.writeBooleanValue("isSharedDevice", this.isSharedDevice);
        writer.writeBooleanValue("isSupervised", this.isSupervised);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("meid", this.meid);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("operatingSystemEdition", this.operatingSystemEdition);
        writer.writeStringValue("operatingSystemLanguage", this.operatingSystemLanguage);
        writer.writeNumberValue("operatingSystemProductType", this.operatingSystemProductType);
        writer.writeStringValue("osBuildNumber", this.osBuildNumber);
        writer.writeStringValue("phoneNumber", this.phoneNumber);
        writer.writeStringValue("productName", this.productName);
        writer.writeNumberValue("residentUsersCount", this.residentUsersCount);
        writer.writeStringValue("serialNumber", this.serialNumber);
        writer.writeCollectionOfObjectValues<SharedAppleDeviceUser>("sharedDeviceCachedUsers", this.sharedDeviceCachedUsers);
        writer.writeStringValue("subnetAddress", this.subnetAddress);
        writer.writeStringValue("subscriberCarrier", this.subscriberCarrier);
        writer.writeStringValue("systemManagementBIOSVersion", this.systemManagementBIOSVersion);
        writer.writeNumberValue("totalStorageSpace", this.totalStorageSpace);
        writer.writeStringValue("tpmManufacturer", this.tpmManufacturer);
        writer.writeStringValue("tpmSpecificationVersion", this.tpmSpecificationVersion);
        writer.writeStringValue("tpmVersion", this.tpmVersion);
        writer.writeStringValue("wifiMac", this.wifiMac);
        writer.writeCollectionOfPrimitiveValues<string>("wiredIPv4Addresses", this.wiredIPv4Addresses);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serialNumber property value. Serial number.
     * @returns a string
     */
    public get serialNumber() {
        return this._serialNumber;
    };
    /**
     * Sets the serialNumber property value. Serial number.
     * @param value Value to set for the serialNumber property.
     */
    public set serialNumber(value: string | undefined) {
        this._serialNumber = value;
    };
    /**
     * Gets the sharedDeviceCachedUsers property value. All users on the shared Apple device
     * @returns a sharedAppleDeviceUser
     */
    public get sharedDeviceCachedUsers() {
        return this._sharedDeviceCachedUsers;
    };
    /**
     * Sets the sharedDeviceCachedUsers property value. All users on the shared Apple device
     * @param value Value to set for the sharedDeviceCachedUsers property.
     */
    public set sharedDeviceCachedUsers(value: SharedAppleDeviceUser[] | undefined) {
        this._sharedDeviceCachedUsers = value;
    };
    /**
     * Gets the subnetAddress property value. SubnetAddress
     * @returns a string
     */
    public get subnetAddress() {
        return this._subnetAddress;
    };
    /**
     * Sets the subnetAddress property value. SubnetAddress
     * @param value Value to set for the subnetAddress property.
     */
    public set subnetAddress(value: string | undefined) {
        this._subnetAddress = value;
    };
    /**
     * Gets the subscriberCarrier property value. Subscriber carrier of the device
     * @returns a string
     */
    public get subscriberCarrier() {
        return this._subscriberCarrier;
    };
    /**
     * Sets the subscriberCarrier property value. Subscriber carrier of the device
     * @param value Value to set for the subscriberCarrier property.
     */
    public set subscriberCarrier(value: string | undefined) {
        this._subscriberCarrier = value;
    };
    /**
     * Gets the systemManagementBIOSVersion property value. BIOS version as reported by SMBIOS
     * @returns a string
     */
    public get systemManagementBIOSVersion() {
        return this._systemManagementBIOSVersion;
    };
    /**
     * Sets the systemManagementBIOSVersion property value. BIOS version as reported by SMBIOS
     * @param value Value to set for the systemManagementBIOSVersion property.
     */
    public set systemManagementBIOSVersion(value: string | undefined) {
        this._systemManagementBIOSVersion = value;
    };
    /**
     * Gets the totalStorageSpace property value. Total storage space of the device.
     * @returns a int64
     */
    public get totalStorageSpace() {
        return this._totalStorageSpace;
    };
    /**
     * Sets the totalStorageSpace property value. Total storage space of the device.
     * @param value Value to set for the totalStorageSpace property.
     */
    public set totalStorageSpace(value: number | undefined) {
        this._totalStorageSpace = value;
    };
    /**
     * Gets the tpmManufacturer property value. The identifying information that uniquely names the TPM manufacturer
     * @returns a string
     */
    public get tpmManufacturer() {
        return this._tpmManufacturer;
    };
    /**
     * Sets the tpmManufacturer property value. The identifying information that uniquely names the TPM manufacturer
     * @param value Value to set for the tpmManufacturer property.
     */
    public set tpmManufacturer(value: string | undefined) {
        this._tpmManufacturer = value;
    };
    /**
     * Gets the tpmSpecificationVersion property value. String that specifies the specification version.
     * @returns a string
     */
    public get tpmSpecificationVersion() {
        return this._tpmSpecificationVersion;
    };
    /**
     * Sets the tpmSpecificationVersion property value. String that specifies the specification version.
     * @param value Value to set for the tpmSpecificationVersion property.
     */
    public set tpmSpecificationVersion(value: string | undefined) {
        this._tpmSpecificationVersion = value;
    };
    /**
     * Gets the tpmVersion property value. The version of the TPM, as specified by the manufacturer
     * @returns a string
     */
    public get tpmVersion() {
        return this._tpmVersion;
    };
    /**
     * Sets the tpmVersion property value. The version of the TPM, as specified by the manufacturer
     * @param value Value to set for the tpmVersion property.
     */
    public set tpmVersion(value: string | undefined) {
        this._tpmVersion = value;
    };
    /**
     * Gets the wifiMac property value. WiFi MAC address of the device
     * @returns a string
     */
    public get wifiMac() {
        return this._wifiMac;
    };
    /**
     * Sets the wifiMac property value. WiFi MAC address of the device
     * @param value Value to set for the wifiMac property.
     */
    public set wifiMac(value: string | undefined) {
        this._wifiMac = value;
    };
    /**
     * Gets the wiredIPv4Addresses property value. A list of wired IPv4 addresses. The update frequency (the maximum delay for the change of property value to be synchronized from the device to the cloud storage) of this property is daily. Note this property is currently supported only on devices running on Windows.
     * @returns a string
     */
    public get wiredIPv4Addresses() {
        return this._wiredIPv4Addresses;
    };
    /**
     * Sets the wiredIPv4Addresses property value. A list of wired IPv4 addresses. The update frequency (the maximum delay for the change of property value to be synchronized from the device to the cloud storage) of this property is daily. Note this property is currently supported only on devices running on Windows.
     * @param value Value to set for the wiredIPv4Addresses property.
     */
    public set wiredIPv4Addresses(value: string[] | undefined) {
        this._wiredIPv4Addresses = value;
    };
}
