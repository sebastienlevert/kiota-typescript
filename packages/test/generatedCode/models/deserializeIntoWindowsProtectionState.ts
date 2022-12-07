import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWindowsDeviceMalwareState} from './deserializeIntoWindowsDeviceMalwareState';
import {WindowsProtectionState} from './index';
import {WindowsDefenderProductStatus} from './windowsDefenderProductStatus';
import {WindowsDeviceHealthState} from './windowsDeviceHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsProtectionState(windowsProtectionState: WindowsProtectionState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsProtectionState),
        "antiMalwareVersion": n => { windowsProtectionState.antiMalwareVersion = n.getStringValue() as any ; },
        "detectedMalwareState": n => { windowsProtectionState.detectedMalwareState = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsDeviceMalwareState) as any ; },
        "deviceState": n => { windowsProtectionState.deviceState = n.getEnumValue<WindowsDeviceHealthState>(WindowsDeviceHealthState) as any ; },
        "engineVersion": n => { windowsProtectionState.engineVersion = n.getStringValue() as any ; },
        "fullScanOverdue": n => { windowsProtectionState.fullScanOverdue = n.getBooleanValue() as any ; },
        "fullScanRequired": n => { windowsProtectionState.fullScanRequired = n.getBooleanValue() as any ; },
        "isVirtualMachine": n => { windowsProtectionState.isVirtualMachine = n.getBooleanValue() as any ; },
        "lastFullScanDateTime": n => { windowsProtectionState.lastFullScanDateTime = n.getDateValue() as any ; },
        "lastFullScanSignatureVersion": n => { windowsProtectionState.lastFullScanSignatureVersion = n.getStringValue() as any ; },
        "lastQuickScanDateTime": n => { windowsProtectionState.lastQuickScanDateTime = n.getDateValue() as any ; },
        "lastQuickScanSignatureVersion": n => { windowsProtectionState.lastQuickScanSignatureVersion = n.getStringValue() as any ; },
        "lastReportedDateTime": n => { windowsProtectionState.lastReportedDateTime = n.getDateValue() as any ; },
        "malwareProtectionEnabled": n => { windowsProtectionState.malwareProtectionEnabled = n.getBooleanValue() as any ; },
        "networkInspectionSystemEnabled": n => { windowsProtectionState.networkInspectionSystemEnabled = n.getBooleanValue() as any ; },
        "productStatus": n => { windowsProtectionState.productStatus = n.getEnumValue<WindowsDefenderProductStatus>(WindowsDefenderProductStatus) as any ; },
        "quickScanOverdue": n => { windowsProtectionState.quickScanOverdue = n.getBooleanValue() as any ; },
        "realTimeProtectionEnabled": n => { windowsProtectionState.realTimeProtectionEnabled = n.getBooleanValue() as any ; },
        "rebootRequired": n => { windowsProtectionState.rebootRequired = n.getBooleanValue() as any ; },
        "signatureUpdateOverdue": n => { windowsProtectionState.signatureUpdateOverdue = n.getBooleanValue() as any ; },
        "signatureVersion": n => { windowsProtectionState.signatureVersion = n.getStringValue() as any ; },
        "tamperProtectionEnabled": n => { windowsProtectionState.tamperProtectionEnabled = n.getBooleanValue() as any ; },
    }
}
