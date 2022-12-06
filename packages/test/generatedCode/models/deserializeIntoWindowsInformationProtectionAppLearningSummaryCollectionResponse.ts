import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionAppLearningSummary} from './deserializeIntoWindowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionAppLearningSummaryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLearningSummaryCollectionResponse(windowsInformationProtectionAppLearningSummaryCollectionResponse: WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionAppLearningSummaryCollectionResponse),
        "value": n => { windowsInformationProtectionAppLearningSummaryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionAppLearningSummary) as any ; },
    }
}
