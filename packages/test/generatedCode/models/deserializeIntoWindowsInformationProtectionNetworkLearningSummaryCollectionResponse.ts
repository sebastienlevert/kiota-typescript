import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionNetworkLearningSummary} from './deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionNetworkLearningSummaryCollectionResponse(windowsInformationProtectionNetworkLearningSummaryCollectionResponse: WindowsInformationProtectionNetworkLearningSummaryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionNetworkLearningSummaryCollectionResponse),
        "value": n => { windowsInformationProtectionNetworkLearningSummaryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionNetworkLearningSummary) as any ; },
    }
}
