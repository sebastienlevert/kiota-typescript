import {WindowsInformationProtectionResourceCollectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionResourceCollection} from './serializeWindowsInformationProtectionResourceCollection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionResourceCollectionCollectionResponse(writer: SerializationWriter, windowsInformationProtectionResourceCollectionCollectionResponse: WindowsInformationProtectionResourceCollectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionResourceCollectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionResourceCollectionCollectionResponse.value as any, serializeWindowsInformationProtectionResourceCollection);
}
