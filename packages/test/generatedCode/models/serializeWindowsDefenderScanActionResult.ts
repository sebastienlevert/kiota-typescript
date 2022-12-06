import {WindowsDefenderScanActionResult} from './index';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderScanActionResult(writer: SerializationWriter, windowsDefenderScanActionResult: WindowsDefenderScanActionResult | undefined = {}) : void {
        serializeDeviceActionResult(writer, windowsDefenderScanActionResult)
            writer.writeStringValue("scanType", windowsDefenderScanActionResult.scanType);
}
