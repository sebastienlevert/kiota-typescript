import {Entity} from './index';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnector extends Entity, Partial<Parsable> {
    /** For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    androidDeviceBlockedOnMissingPartnerData?: boolean;
    /** For Android, set whether data from the data sync partner should be used during compliance evaluations */
    androidEnabled?: boolean;
    /** For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant */
    iosDeviceBlockedOnMissingPartnerData?: boolean;
    /** For IOS, get or set whether data from the data sync partner should be used during compliance evaluations */
    iosEnabled?: boolean;
    /** DateTime of last Heartbeat recieved from the Data Sync Partner */
    lastHeartbeatDateTime?: Date;
    /** Partner state of this tenant. */
    partnerState?: MobileThreatPartnerTenantState;
    /** Get or Set days the per tenant tolerance to unresponsiveness for this partner integration */
    partnerUnresponsivenessThresholdInDays?: number;
    /** Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner */
    partnerUnsupportedOsVersionBlocked?: boolean;
}
