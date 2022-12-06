import {OrgContact} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeOnPremisesProvisioningError} from './serializeOnPremisesProvisioningError';
import {serializePhone} from './serializePhone';
import {serializePhysicalOfficeAddress} from './serializePhysicalOfficeAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrgContact(writer: SerializationWriter, orgContact: OrgContact | undefined = {}) : void {
        serializeDirectoryObject(writer, orgContact)
            writer.writeCollectionOfObjectValuesFromMethod("addresses", orgContact.addresses as any, serializePhysicalOfficeAddress);
            writer.writeStringValue("companyName", orgContact.companyName);
            writer.writeStringValue("department", orgContact.department);
            writer.writeCollectionOfObjectValuesFromMethod("directReports", orgContact.directReports as any, serializeDirectoryObject);
            writer.writeStringValue("displayName", orgContact.displayName);
            writer.writeStringValue("givenName", orgContact.givenName);
            writer.writeStringValue("jobTitle", orgContact.jobTitle);
            writer.writeStringValue("mail", orgContact.mail);
            writer.writeStringValue("mailNickname", orgContact.mailNickname);
            writer.writeObjectValueFromMethod("manager", orgContact.manager as any, serializeDirectoryObject);
            writer.writeCollectionOfObjectValuesFromMethod("memberOf", orgContact.memberOf as any, serializeDirectoryObject);
            writer.writeDateValue("onPremisesLastSyncDateTime", orgContact.onPremisesLastSyncDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("onPremisesProvisioningErrors", orgContact.onPremisesProvisioningErrors as any, serializeOnPremisesProvisioningError);
            writer.writeBooleanValue("onPremisesSyncEnabled", orgContact.onPremisesSyncEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("phones", orgContact.phones as any, serializePhone);
            writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", orgContact.proxyAddresses);
            writer.writeStringValue("surname", orgContact.surname);
            writer.writeCollectionOfObjectValuesFromMethod("transitiveMemberOf", orgContact.transitiveMemberOf as any, serializeDirectoryObject);
}
