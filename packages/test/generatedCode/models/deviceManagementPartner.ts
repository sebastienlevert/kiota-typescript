import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartner extends Entity, Partial<Parsable> {
    /** Partner display name */
    displayName?: string;
    /** Whether device management partner is configured or not */
    isConfigured?: boolean;
    /** Timestamp of last heartbeat after admin enabled option Connect to Device management Partner */
    lastHeartbeatDateTime?: Date;
    /** Partner App Type. */
    partnerAppType?: DeviceManagementPartnerAppType;
    /** Partner state of this tenant. */
    partnerState?: DeviceManagementPartnerTenantState;
    /** Partner Single tenant App id */
    singleTenantAppId?: string;
    /** DateTime in UTC when PartnerDevices will be marked as NonCompliant */
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: Date;
    /** DateTime in UTC when PartnerDevices will be removed */
    whenPartnerDevicesWillBeRemovedDateTime?: Date;
}
