import {WindowsInformationProtectionIPRangeCollectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionIPRangeCollection} from './serializeWindowsInformationProtectionIPRangeCollection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionIPRangeCollectionCollectionResponse(writer: SerializationWriter, windowsInformationProtectionIPRangeCollectionCollectionResponse: WindowsInformationProtectionIPRangeCollectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionIPRangeCollectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionIPRangeCollectionCollectionResponse.value as any, serializeWindowsInformationProtectionIPRangeCollection);
}
