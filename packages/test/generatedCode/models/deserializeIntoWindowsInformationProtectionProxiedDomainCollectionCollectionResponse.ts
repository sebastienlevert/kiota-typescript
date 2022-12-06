import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionProxiedDomainCollection} from './deserializeIntoWindowsInformationProtectionProxiedDomainCollection';
import {WindowsInformationProtectionProxiedDomainCollectionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionProxiedDomainCollectionCollectionResponse(windowsInformationProtectionProxiedDomainCollectionCollectionResponse: WindowsInformationProtectionProxiedDomainCollectionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionProxiedDomainCollectionCollectionResponse),
        "value": n => { windowsInformationProtectionProxiedDomainCollectionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionProxiedDomainCollection) as any ; },
    }
}
