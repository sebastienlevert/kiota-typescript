import {MdmWindowsInformationProtectionPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMdmWindowsInformationProtectionPolicy} from './serializeMdmWindowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMdmWindowsInformationProtectionPolicyCollectionResponse(writer: SerializationWriter, mdmWindowsInformationProtectionPolicyCollectionResponse: MdmWindowsInformationProtectionPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mdmWindowsInformationProtectionPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mdmWindowsInformationProtectionPolicyCollectionResponse.value as any, serializeMdmWindowsInformationProtectionPolicy);
}
