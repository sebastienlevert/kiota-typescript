import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {WindowsDefenderScanActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderScanActionResult(windowsDefenderScanActionResult: WindowsDefenderScanActionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(windowsDefenderScanActionResult),
        "scanType": n => { windowsDefenderScanActionResult.scanType = n.getStringValue() as any ; },
    }
}
