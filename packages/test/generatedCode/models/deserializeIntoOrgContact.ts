import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoOnPremisesProvisioningError} from './deserializeIntoOnPremisesProvisioningError';
import {deserializeIntoPhone} from './deserializeIntoPhone';
import {deserializeIntoPhysicalOfficeAddress} from './deserializeIntoPhysicalOfficeAddress';
import {OrgContact} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrgContact(orgContact: OrgContact | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(orgContact),
        "addresses": n => { orgContact.addresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhysicalOfficeAddress) as any ; },
        "companyName": n => { orgContact.companyName = n.getStringValue() as any ; },
        "department": n => { orgContact.department = n.getStringValue() as any ; },
        "directReports": n => { orgContact.directReports = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "displayName": n => { orgContact.displayName = n.getStringValue() as any ; },
        "givenName": n => { orgContact.givenName = n.getStringValue() as any ; },
        "jobTitle": n => { orgContact.jobTitle = n.getStringValue() as any ; },
        "mail": n => { orgContact.mail = n.getStringValue() as any ; },
        "mailNickname": n => { orgContact.mailNickname = n.getStringValue() as any ; },
        "manager": n => { orgContact.manager = n.getObject(deserializeIntoDirectoryObject) as any ; },
        "memberOf": n => { orgContact.memberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "onPremisesLastSyncDateTime": n => { orgContact.onPremisesLastSyncDateTime = n.getDateValue() as any ; },
        "onPremisesProvisioningErrors": n => { orgContact.onPremisesProvisioningErrors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnPremisesProvisioningError) as any ; },
        "onPremisesSyncEnabled": n => { orgContact.onPremisesSyncEnabled = n.getBooleanValue() as any ; },
        "phones": n => { orgContact.phones = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhone) as any ; },
        "proxyAddresses": n => { orgContact.proxyAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "surname": n => { orgContact.surname = n.getStringValue() as any ; },
        "transitiveMemberOf": n => { orgContact.transitiveMemberOf = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
    }
}
