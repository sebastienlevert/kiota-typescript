import {CloudPcPartnerAgentInstallStatus} from './cloudPcPartnerAgentInstallStatus';
import {CloudPcPartnerAgentName} from './cloudPcPartnerAgentName';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudPcPartnerAgentInstallResult extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The installStatus property */
    installStatus?: CloudPcPartnerAgentInstallStatus;
    /** The isThirdPartyPartner property */
    isThirdPartyPartner?: boolean;
    /** The partnerAgentName property */
    partnerAgentName?: CloudPcPartnerAgentName;
    /** The retriable property */
    retriable?: boolean;
}
