import {AverageComparativeScore, ControlScore, Entity, SecurityVendorInformation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScore extends Entity, Partial<Parsable> {
    /** Active user count of the given tenant. */
    activeUserCount?: number;
    /** Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope. */
    averageComparativeScores?: AverageComparativeScore[];
    /** GUID string for tenant ID. */
    azureTenantId?: string;
    /** Contains tenant scores for a set of controls. */
    controlScores?: ControlScore[];
    /** The date when the entity is created. */
    createdDateTime?: Date;
    /** Tenant current attained score on specified date. */
    currentScore?: number;
    /** Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint). */
    enabledServices?: string[];
    /** Licensed user count of the given tenant. */
    licensedUserCount?: number;
    /** Tenant maximum possible score on specified date. */
    maxScore?: number;
    /** Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required. */
    vendorInformation?: SecurityVendorInformation;
}
