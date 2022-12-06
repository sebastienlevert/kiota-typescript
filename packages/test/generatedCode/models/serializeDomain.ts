import {Domain} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {serializeDomainState} from './serializeDomainState';
import {serializeEntity} from './serializeEntity';
import {serializeInternalDomainFederation} from './serializeInternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomain(writer: SerializationWriter, domain: Domain | undefined = {}) : void {
        serializeEntity(writer, domain)
            writer.writeStringValue("authenticationType", domain.authenticationType);
            writer.writeStringValue("availabilityStatus", domain.availabilityStatus);
            writer.writeCollectionOfObjectValuesFromMethod("domainNameReferences", domain.domainNameReferences as any, serializeDirectoryObject);
            writer.writeCollectionOfObjectValuesFromMethod("federationConfiguration", domain.federationConfiguration as any, serializeInternalDomainFederation);
            writer.writeBooleanValue("isAdminManaged", domain.isAdminManaged);
            writer.writeBooleanValue("isDefault", domain.isDefault);
            writer.writeBooleanValue("isInitial", domain.isInitial);
            writer.writeBooleanValue("isRoot", domain.isRoot);
            writer.writeBooleanValue("isVerified", domain.isVerified);
            writer.writeStringValue("manufacturer", domain.manufacturer);
            writer.writeStringValue("model", domain.model);
            writer.writeNumberValue("passwordNotificationWindowInDays", domain.passwordNotificationWindowInDays);
            writer.writeNumberValue("passwordValidityPeriodInDays", domain.passwordValidityPeriodInDays);
            writer.writeCollectionOfObjectValuesFromMethod("serviceConfigurationRecords", domain.serviceConfigurationRecords as any, serializeDomainDnsRecord);
            writer.writeObjectValueFromMethod("state", domain.state as any, serializeDomainState);
            writer.writeCollectionOfPrimitiveValues<string>("supportedServices", domain.supportedServices);
            writer.writeCollectionOfObjectValuesFromMethod("verificationDnsRecords", domain.verificationDnsRecords as any, serializeDomainDnsRecord);
}
