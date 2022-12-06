import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {ResetPasscodeActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResetPasscodeActionResult(resetPasscodeActionResult: ResetPasscodeActionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(resetPasscodeActionResult),
        "passcode": n => { resetPasscodeActionResult.passcode = n.getStringValue() as any ; },
    }
}
