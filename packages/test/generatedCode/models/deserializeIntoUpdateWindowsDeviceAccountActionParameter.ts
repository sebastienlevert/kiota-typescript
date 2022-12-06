import {deserializeIntoWindowsDeviceAccount} from './deserializeIntoWindowsDeviceAccount';
import {UpdateWindowsDeviceAccountActionParameter} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateWindowsDeviceAccountActionParameter(updateWindowsDeviceAccountActionParameter: UpdateWindowsDeviceAccountActionParameter | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "calendarSyncEnabled": n => { updateWindowsDeviceAccountActionParameter.calendarSyncEnabled = n.getBooleanValue() as any ; },
        "deviceAccount": n => { updateWindowsDeviceAccountActionParameter.deviceAccount = n.getObject(deserializeIntoWindowsDeviceAccount) as any ; },
        "deviceAccountEmail": n => { updateWindowsDeviceAccountActionParameter.deviceAccountEmail = n.getStringValue() as any ; },
        "exchangeServer": n => { updateWindowsDeviceAccountActionParameter.exchangeServer = n.getStringValue() as any ; },
        "@odata.type": n => { updateWindowsDeviceAccountActionParameter.odataType = n.getStringValue() as any ; },
        "passwordRotationEnabled": n => { updateWindowsDeviceAccountActionParameter.passwordRotationEnabled = n.getBooleanValue() as any ; },
        "sessionInitiationProtocalAddress": n => { updateWindowsDeviceAccountActionParameter.sessionInitiationProtocalAddress = n.getStringValue() as any ; },
    }
}
