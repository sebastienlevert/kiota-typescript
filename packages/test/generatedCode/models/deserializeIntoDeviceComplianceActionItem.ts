import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceActionType} from './deviceComplianceActionType';
import {DeviceComplianceActionItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceActionItem(deviceComplianceActionItem: DeviceComplianceActionItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceActionItem),
        "actionType": n => { deviceComplianceActionItem.actionType = n.getEnumValue<DeviceComplianceActionType>(DeviceComplianceActionType) as any ; },
        "gracePeriodHours": n => { deviceComplianceActionItem.gracePeriodHours = n.getNumberValue() as any ; },
        "notificationMessageCCList": n => { deviceComplianceActionItem.notificationMessageCCList = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "notificationTemplateId": n => { deviceComplianceActionItem.notificationTemplateId = n.getStringValue() as any ; },
    }
}
