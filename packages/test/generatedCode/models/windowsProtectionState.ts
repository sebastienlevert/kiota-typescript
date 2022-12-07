import {Entity, WindowsDeviceMalwareState} from './index';
import {WindowsDefenderProductStatus} from './windowsDefenderProductStatus';
import {WindowsDeviceHealthState} from './windowsDeviceHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsProtectionState extends Entity, Partial<Parsable> {
    /** Current anti malware version */
    antiMalwareVersion?: string;
    /** Device malware list */
    detectedMalwareState?: WindowsDeviceMalwareState[];
    /** Computer endpoint protection state */
    deviceState?: WindowsDeviceHealthState;
    /** Current endpoint protection engine's version */
    engineVersion?: string;
    /** Full scan overdue or not? */
    fullScanOverdue?: boolean;
    /** Full scan required or not? */
    fullScanRequired?: boolean;
    /** Indicates whether the device is a virtual machine. */
    isVirtualMachine?: boolean;
    /** Last quick scan datetime */
    lastFullScanDateTime?: Date;
    /** Last full scan signature version */
    lastFullScanSignatureVersion?: string;
    /** Last quick scan datetime */
    lastQuickScanDateTime?: Date;
    /** Last quick scan signature version */
    lastQuickScanSignatureVersion?: string;
    /** Last device health status reported time */
    lastReportedDateTime?: Date;
    /** Anti malware is enabled or not */
    malwareProtectionEnabled?: boolean;
    /** Network inspection system enabled or not? */
    networkInspectionSystemEnabled?: boolean;
    /** Product Status of Windows Defender */
    productStatus?: WindowsDefenderProductStatus;
    /** Quick scan overdue or not? */
    quickScanOverdue?: boolean;
    /** Real time protection is enabled or not? */
    realTimeProtectionEnabled?: boolean;
    /** Reboot required or not? */
    rebootRequired?: boolean;
    /** Signature out of date or not? */
    signatureUpdateOverdue?: boolean;
    /** Current malware definitions version */
    signatureVersion?: string;
    /** Indicates whether the Windows Defender tamper protection feature is enabled. */
    tamperProtectionEnabled?: boolean;
}
