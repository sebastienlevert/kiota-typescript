import {ActionState} from './actionState';
import {DeviceActionResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceActionResult(deviceActionResult: DeviceActionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "actionName": n => { deviceActionResult.actionName = n.getStringValue() as any ; },
        "actionState": n => { deviceActionResult.actionState = n.getEnumValue<ActionState>(ActionState) as any ; },
        "lastUpdatedDateTime": n => { deviceActionResult.lastUpdatedDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { deviceActionResult.odataType = n.getStringValue() as any ; },
        "startDateTime": n => { deviceActionResult.startDateTime = n.getDateValue() as any ; },
    }
}
