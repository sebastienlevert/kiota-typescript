import {RemoteLockActionResult} from './index';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoteLockActionResult(writer: SerializationWriter, remoteLockActionResult: RemoteLockActionResult | undefined = {}) : void {
        serializeDeviceActionResult(writer, remoteLockActionResult)
            writer.writeStringValue("unlockPin", remoteLockActionResult.unlockPin);
}
