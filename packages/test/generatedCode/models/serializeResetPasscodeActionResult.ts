import {ResetPasscodeActionResult} from './index';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResetPasscodeActionResult(writer: SerializationWriter, resetPasscodeActionResult: ResetPasscodeActionResult | undefined = {}) : void {
        serializeDeviceActionResult(writer, resetPasscodeActionResult)
            writer.writeStringValue("passcode", resetPasscodeActionResult.passcode);
}
