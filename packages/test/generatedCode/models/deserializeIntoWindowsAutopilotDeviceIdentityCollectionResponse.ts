import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsAutopilotDeviceIdentity} from './deserializeIntoWindowsAutopilotDeviceIdentity';
import {WindowsAutopilotDeviceIdentityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse(windowsAutopilotDeviceIdentityCollectionResponse: WindowsAutopilotDeviceIdentityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsAutopilotDeviceIdentityCollectionResponse),
        "value": n => { windowsAutopilotDeviceIdentityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsAutopilotDeviceIdentity) as any ; },
    }
}
