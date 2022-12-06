import {WindowsInformationProtectionPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionPolicy} from './serializeWindowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionPolicyCollectionResponse(writer: SerializationWriter, windowsInformationProtectionPolicyCollectionResponse: WindowsInformationProtectionPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionPolicyCollectionResponse.value as any, serializeWindowsInformationProtectionPolicy);
}
