import {ImportedWindowsAutopilotDeviceIdentityCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeImportedWindowsAutopilotDeviceIdentity} from './serializeImportedWindowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportedWindowsAutopilotDeviceIdentityCollectionResponse(writer: SerializationWriter, importedWindowsAutopilotDeviceIdentityCollectionResponse: ImportedWindowsAutopilotDeviceIdentityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, importedWindowsAutopilotDeviceIdentityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", importedWindowsAutopilotDeviceIdentityCollectionResponse.value as any, serializeImportedWindowsAutopilotDeviceIdentity);
}
