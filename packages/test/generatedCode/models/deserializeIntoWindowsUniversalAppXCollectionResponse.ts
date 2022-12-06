import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsUniversalAppX} from './deserializeIntoWindowsUniversalAppX';
import {WindowsUniversalAppXCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppXCollectionResponse(windowsUniversalAppXCollectionResponse: WindowsUniversalAppXCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsUniversalAppXCollectionResponse),
        "value": n => { windowsUniversalAppXCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsUniversalAppX) as any ; },
    }
}
