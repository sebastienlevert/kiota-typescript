import {WindowsInformationProtectionProxiedDomainCollection} from './index';
import {serializeProxiedDomain} from './serializeProxiedDomain';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionProxiedDomainCollection(writer: SerializationWriter, windowsInformationProtectionProxiedDomainCollection: WindowsInformationProtectionProxiedDomainCollection | undefined = {}) : void {
            writer.writeStringValue("displayName", windowsInformationProtectionProxiedDomainCollection.displayName);
            writer.writeStringValue("@odata.type", windowsInformationProtectionProxiedDomainCollection.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("proxiedDomains", windowsInformationProtectionProxiedDomainCollection.proxiedDomains as any, serializeProxiedDomain);
}
