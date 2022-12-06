import {RiskDetection, RiskyUser} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityProtectionRoot extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Risk detection in Azure AD Identity Protection and the associated information about the detection. */
    riskDetections?: RiskDetection[];
    /** Users that are flagged as at-risk by Azure AD Identity Protection. */
    riskyUsers?: RiskyUser[];
}
