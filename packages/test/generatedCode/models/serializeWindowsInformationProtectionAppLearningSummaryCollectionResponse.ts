import {WindowsInformationProtectionAppLearningSummaryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionAppLearningSummary} from './serializeWindowsInformationProtectionAppLearningSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppLearningSummaryCollectionResponse(writer: SerializationWriter, windowsInformationProtectionAppLearningSummaryCollectionResponse: WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionAppLearningSummaryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionAppLearningSummaryCollectionResponse.value as any, serializeWindowsInformationProtectionAppLearningSummary);
}
