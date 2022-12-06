import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {ComplianceManagementPartnerAssignment, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceManagementPartner extends Entity, Partial<Parsable> {
    /** User groups which enroll Android devices through partner. */
    androidEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
    /** Partner onboarded for Android devices. */
    androidOnboarded?: boolean;
    /** Partner display name */
    displayName?: string;
    /** User groups which enroll ios devices through partner. */
    iosEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
    /** Partner onboarded for ios devices. */
    iosOnboarded?: boolean;
    /** Timestamp of last heartbeat after admin onboarded to the compliance management partner */
    lastHeartbeatDateTime?: Date;
    /** User groups which enroll Mac devices through partner. */
    macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
    /** Partner onboarded for Mac devices. */
    macOsOnboarded?: boolean;
    /** Partner state of this tenant. */
    partnerState?: DeviceManagementPartnerTenantState;
}
