import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from './deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse(importedWindowsAutopilotDeviceIdentityCollectionResponse: ImportedWindowsAutopilotDeviceIdentityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(importedWindowsAutopilotDeviceIdentityCollectionResponse),
        "value": n => { importedWindowsAutopilotDeviceIdentityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoImportedWindowsAutopilotDeviceIdentity) as any ; },
    }
}
