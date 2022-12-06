import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileThreatDefenseConnector} from './index';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileThreatDefenseConnector(mobileThreatDefenseConnector: MobileThreatDefenseConnector | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileThreatDefenseConnector),
        "androidDeviceBlockedOnMissingPartnerData": n => { mobileThreatDefenseConnector.androidDeviceBlockedOnMissingPartnerData = n.getBooleanValue() as any ; },
        "androidEnabled": n => { mobileThreatDefenseConnector.androidEnabled = n.getBooleanValue() as any ; },
        "iosDeviceBlockedOnMissingPartnerData": n => { mobileThreatDefenseConnector.iosDeviceBlockedOnMissingPartnerData = n.getBooleanValue() as any ; },
        "iosEnabled": n => { mobileThreatDefenseConnector.iosEnabled = n.getBooleanValue() as any ; },
        "lastHeartbeatDateTime": n => { mobileThreatDefenseConnector.lastHeartbeatDateTime = n.getDateValue() as any ; },
        "partnerState": n => { mobileThreatDefenseConnector.partnerState = n.getEnumValue<MobileThreatPartnerTenantState>(MobileThreatPartnerTenantState) as any ; },
        "partnerUnresponsivenessThresholdInDays": n => { mobileThreatDefenseConnector.partnerUnresponsivenessThresholdInDays = n.getNumberValue() as any ; },
        "partnerUnsupportedOsVersionBlocked": n => { mobileThreatDefenseConnector.partnerUnsupportedOsVersionBlocked = n.getBooleanValue() as any ; },
    }
}
