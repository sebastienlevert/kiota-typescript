import {WindowsInformationProtectionAppLockerFileCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionAppLockerFile} from './serializeWindowsInformationProtectionAppLockerFile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppLockerFileCollectionResponse(writer: SerializationWriter, windowsInformationProtectionAppLockerFileCollectionResponse: WindowsInformationProtectionAppLockerFileCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionAppLockerFileCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionAppLockerFileCollectionResponse.value as any, serializeWindowsInformationProtectionAppLockerFile);
}
