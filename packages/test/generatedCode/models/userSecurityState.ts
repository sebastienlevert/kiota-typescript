import {EmailRole} from './emailRole';
import {LogonType} from './logonType';
import {UserAccountSecurityType} from './userAccountSecurityType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserSecurityState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** AAD User object identifier (GUID) - represents the physical/multi-account user entity. */
    aadUserId?: string;
    /** Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName). */
    accountName?: string;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** NetBIOS/Active Directory domain of user account (that is, domain/account format). */
    domainName?: string;
    /** For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient. */
    emailRole?: EmailRole;
    /** Indicates whether the user logged on through a VPN. */
    isVpn?: boolean;
    /** Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    logonDateTime?: Date;
    /** User sign-in ID. */
    logonId?: string;
    /** IP Address the sign-in request originated from. */
    logonIp?: string;
    /** Location (by IP address mapping) associated with a user sign-in event by this user. */
    logonLocation?: string;
    /** Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service. */
    logonType?: LogonType;
    /** The OdataType property */
    odataType?: string;
    /** Active Directory (on-premises) Security Identifier (SID) of the user. */
    onPremisesSecurityIdentifier?: string;
    /** Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a percentage. */
    riskScore?: string;
    /** User account type (group membership), per Windows definition. Possible values are: unknown, standard, power, administrator. */
    userAccountType?: UserAccountSecurityType;
    /** User sign-in name - internet format: (user account name)@(user account DNS domain name). */
    userPrincipalName?: string;
}
