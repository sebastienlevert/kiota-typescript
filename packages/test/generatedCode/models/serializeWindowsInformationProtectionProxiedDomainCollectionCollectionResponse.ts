import {WindowsInformationProtectionProxiedDomainCollectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsInformationProtectionProxiedDomainCollection} from './serializeWindowsInformationProtectionProxiedDomainCollection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionProxiedDomainCollectionCollectionResponse(writer: SerializationWriter, windowsInformationProtectionProxiedDomainCollectionCollectionResponse: WindowsInformationProtectionProxiedDomainCollectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionProxiedDomainCollectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsInformationProtectionProxiedDomainCollectionCollectionResponse.value as any, serializeWindowsInformationProtectionProxiedDomainCollection);
}
