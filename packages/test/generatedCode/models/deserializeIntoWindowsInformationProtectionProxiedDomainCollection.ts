import {deserializeIntoProxiedDomain} from './deserializeIntoProxiedDomain';
import {WindowsInformationProtectionProxiedDomainCollection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionProxiedDomainCollection(windowsInformationProtectionProxiedDomainCollection: WindowsInformationProtectionProxiedDomainCollection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionProxiedDomainCollection.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { windowsInformationProtectionProxiedDomainCollection.odataType = n.getStringValue() as any ; },
        "proxiedDomains": n => { windowsInformationProtectionProxiedDomainCollection.proxiedDomains = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProxiedDomain) as any ; },
    }
}
