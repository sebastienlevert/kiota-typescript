import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionNetworkLearningSummary} from './serializeWindowsInformationProtectionNetworkLearningSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionNetworkLearningSummaryCollectionResponse(writer: SerializationWriter, windowsInformationProtectionNetworkLearningSummaryCollectionResponse: WindowsInformationProtectionNetworkLearningSummaryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionNetworkLearningSummaryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionNetworkLearningSummaryCollectionResponse.value as any, serializeWindowsInformationProtectionNetworkLearningSummary);
}
