import {DirectoryObject, OnPremisesProvisioningError, Phone, PhysicalOfficeAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrgContact extends DirectoryObject, Partial<Parsable> {
    /** The addresses property */
    addresses?: PhysicalOfficeAddress[];
    /** The companyName property */
    companyName?: string;
    /** The department property */
    department?: string;
    /** The directReports property */
    directReports?: DirectoryObject[];
    /** The displayName property */
    displayName?: string;
    /** The givenName property */
    givenName?: string;
    /** The jobTitle property */
    jobTitle?: string;
    /** The mail property */
    mail?: string;
    /** The mailNickname property */
    mailNickname?: string;
    /** The manager property */
    manager?: DirectoryObject;
    /** The memberOf property */
    memberOf?: DirectoryObject[];
    /** The onPremisesLastSyncDateTime property */
    onPremisesLastSyncDateTime?: Date;
    /** The onPremisesProvisioningErrors property */
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    /** The onPremisesSyncEnabled property */
    onPremisesSyncEnabled?: boolean;
    /** The phones property */
    phones?: Phone[];
    /** The proxyAddresses property */
    proxyAddresses?: string[];
    /** The surname property */
    surname?: string;
    /** The transitiveMemberOf property */
    transitiveMemberOf?: DirectoryObject[];
}
