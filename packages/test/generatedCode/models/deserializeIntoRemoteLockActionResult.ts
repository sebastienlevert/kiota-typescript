import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {RemoteLockActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteLockActionResult(remoteLockActionResult: RemoteLockActionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(remoteLockActionResult),
        "unlockPin": n => { remoteLockActionResult.unlockPin = n.getStringValue() as any ; },
    }
}
