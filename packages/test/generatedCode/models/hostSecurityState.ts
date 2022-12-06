import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface HostSecurityState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com). */
    fqdn?: string;
    /** The isAzureAdJoined property */
    isAzureAdJoined?: boolean;
    /** The isAzureAdRegistered property */
    isAzureAdRegistered?: boolean;
    /** True if the host is domain joined to an on-premises Active Directory domain. */
    isHybridAzureDomainJoined?: boolean;
    /** The local host name, without the DNS domain name. */
    netBiosName?: string;
    /** The OdataType property */
    odataType?: string;
    /** Host Operating System. (For example, Windows10, MacOS, RHEL, etc.). */
    os?: string;
    /** Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert. */
    privateIpAddress?: string;
    /** Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert. */
    publicIpAddress?: string;
    /** Provider-generated/calculated risk score of the host.  Recommended value range of 0-1, which equates to a percentage. */
    riskScore?: string;
}
