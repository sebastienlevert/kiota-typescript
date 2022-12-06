import {WindowsInformationProtectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtection} from './serializeWindowsInformationProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionCollectionResponse(writer: SerializationWriter, windowsInformationProtectionCollectionResponse: WindowsInformationProtectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionCollectionResponse.value as any, serializeWindowsInformationProtection);
}
