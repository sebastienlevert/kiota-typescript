import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtection} from './deserializeIntoWindowsInformationProtection';
import {WindowsInformationProtectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionCollectionResponse(windowsInformationProtectionCollectionResponse: WindowsInformationProtectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionCollectionResponse),
        "value": n => { windowsInformationProtectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtection) as any ; },
    }
}
