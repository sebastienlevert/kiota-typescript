import {ActionState} from './actionState';
import {DeviceActionResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceActionResult(writer: SerializationWriter, deviceActionResult: DeviceActionResult | undefined = {}) : void {
            writer.writeStringValue("actionName", deviceActionResult.actionName);
            writer.writeEnumValue<ActionState>("actionState", deviceActionResult.actionState);
            writer.writeDateValue("lastUpdatedDateTime", deviceActionResult.lastUpdatedDateTime);
            writer.writeDateValue("startDateTime", deviceActionResult.startDateTime);
}
