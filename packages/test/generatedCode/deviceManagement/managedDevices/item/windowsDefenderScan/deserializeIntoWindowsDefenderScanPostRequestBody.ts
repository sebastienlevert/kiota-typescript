import {WindowsDefenderScanPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderScanPostRequestBody(windowsDefenderScanPostRequestBody: WindowsDefenderScanPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "quickScan": n => { windowsDefenderScanPostRequestBody.quickScan = n.getBooleanValue() as any ; },
    }
}
