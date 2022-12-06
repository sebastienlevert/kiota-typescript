import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from '../../../models/deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import {ImportResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImportResponse(importResponse: ImportResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(importResponse),
        "value": n => { importResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoImportedWindowsAutopilotDeviceIdentity) as any ; },
    }
}
