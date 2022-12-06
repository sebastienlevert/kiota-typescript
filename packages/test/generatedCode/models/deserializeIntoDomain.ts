import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {deserializeIntoDomainState} from './deserializeIntoDomainState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoInternalDomainFederation} from './deserializeIntoInternalDomainFederation';
import {Domain} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomain(domain: Domain | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(domain),
        "authenticationType": n => { domain.authenticationType = n.getStringValue() as any ; },
        "availabilityStatus": n => { domain.availabilityStatus = n.getStringValue() as any ; },
        "domainNameReferences": n => { domain.domainNameReferences = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "federationConfiguration": n => { domain.federationConfiguration = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInternalDomainFederation) as any ; },
        "isAdminManaged": n => { domain.isAdminManaged = n.getBooleanValue() as any ; },
        "isDefault": n => { domain.isDefault = n.getBooleanValue() as any ; },
        "isInitial": n => { domain.isInitial = n.getBooleanValue() as any ; },
        "isRoot": n => { domain.isRoot = n.getBooleanValue() as any ; },
        "isVerified": n => { domain.isVerified = n.getBooleanValue() as any ; },
        "manufacturer": n => { domain.manufacturer = n.getStringValue() as any ; },
        "model": n => { domain.model = n.getStringValue() as any ; },
        "passwordNotificationWindowInDays": n => { domain.passwordNotificationWindowInDays = n.getNumberValue() as any ; },
        "passwordValidityPeriodInDays": n => { domain.passwordValidityPeriodInDays = n.getNumberValue() as any ; },
        "serviceConfigurationRecords": n => { domain.serviceConfigurationRecords = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsRecord) as any ; },
        "state": n => { domain.state = n.getObject(deserializeIntoDomainState) as any ; },
        "supportedServices": n => { domain.supportedServices = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "verificationDnsRecords": n => { domain.verificationDnsRecords = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDomainDnsRecord) as any ; },
    }
}
