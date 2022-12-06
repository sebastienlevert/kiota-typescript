import {WindowsAutopilotDeviceIdentityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsAutopilotDeviceIdentity} from './serializeWindowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsAutopilotDeviceIdentityCollectionResponse(writer: SerializationWriter, windowsAutopilotDeviceIdentityCollectionResponse: WindowsAutopilotDeviceIdentityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsAutopilotDeviceIdentityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsAutopilotDeviceIdentityCollectionResponse.value as any, serializeWindowsAutopilotDeviceIdentity);
}
