import {WindowsDefenderScanPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderScanPostRequestBody(writer: SerializationWriter, windowsDefenderScanPostRequestBody: WindowsDefenderScanPostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("quickScan", windowsDefenderScanPostRequestBody.quickScan);
}
