import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionIPRangeCollection} from './deserializeIntoWindowsInformationProtectionIPRangeCollection';
import {WindowsInformationProtectionIPRangeCollectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionIPRangeCollectionCollectionResponse(windowsInformationProtectionIPRangeCollectionCollectionResponse: WindowsInformationProtectionIPRangeCollectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionIPRangeCollectionCollectionResponse),
        "value": n => { windowsInformationProtectionIPRangeCollectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionIPRangeCollection) as any ; },
    }
}
