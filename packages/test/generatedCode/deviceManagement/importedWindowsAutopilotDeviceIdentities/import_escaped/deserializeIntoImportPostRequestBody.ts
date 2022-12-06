import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from '../../../models/deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import {ImportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportPostRequestBody(importPostRequestBody: ImportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "importedWindowsAutopilotDeviceIdentities": n => { importPostRequestBody.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoImportedWindowsAutopilotDeviceIdentity) as any ; },
    }
}
