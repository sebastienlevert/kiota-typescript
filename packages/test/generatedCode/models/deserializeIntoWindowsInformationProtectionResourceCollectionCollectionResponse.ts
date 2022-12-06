import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionResourceCollection} from './deserializeIntoWindowsInformationProtectionResourceCollection';
import {WindowsInformationProtectionResourceCollectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionResourceCollectionCollectionResponse(windowsInformationProtectionResourceCollectionCollectionResponse: WindowsInformationProtectionResourceCollectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionResourceCollectionCollectionResponse),
        "value": n => { windowsInformationProtectionResourceCollectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionResourceCollection) as any ; },
    }
}
