import {WindowsInformationProtectionAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionApp} from './serializeWindowsInformationProtectionApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppCollectionResponse(writer: SerializationWriter, windowsInformationProtectionAppCollectionResponse: WindowsInformationProtectionAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionAppCollectionResponse.value as any, serializeWindowsInformationProtectionApp);
}
