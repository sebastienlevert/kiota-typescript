import {MobileThreatDefenseConnector} from './index';
import {MobileThreatPartnerTenantState} from './mobileThreatPartnerTenantState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileThreatDefenseConnector(writer: SerializationWriter, mobileThreatDefenseConnector: MobileThreatDefenseConnector | undefined = {}) : void {
        serializeEntity(writer, mobileThreatDefenseConnector)
            writer.writeBooleanValue("androidDeviceBlockedOnMissingPartnerData", mobileThreatDefenseConnector.androidDeviceBlockedOnMissingPartnerData);
            writer.writeBooleanValue("androidEnabled", mobileThreatDefenseConnector.androidEnabled);
            writer.writeBooleanValue("iosDeviceBlockedOnMissingPartnerData", mobileThreatDefenseConnector.iosDeviceBlockedOnMissingPartnerData);
            writer.writeBooleanValue("iosEnabled", mobileThreatDefenseConnector.iosEnabled);
            writer.writeDateValue("lastHeartbeatDateTime", mobileThreatDefenseConnector.lastHeartbeatDateTime);
            writer.writeEnumValue<MobileThreatPartnerTenantState>("partnerState", mobileThreatDefenseConnector.partnerState);
            writer.writeNumberValue("partnerUnresponsivenessThresholdInDays", mobileThreatDefenseConnector.partnerUnresponsivenessThresholdInDays);
            writer.writeBooleanValue("partnerUnsupportedOsVersionBlocked", mobileThreatDefenseConnector.partnerUnsupportedOsVersionBlocked);
}
