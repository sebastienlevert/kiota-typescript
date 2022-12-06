import {RiskDetail} from './riskDetail';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RiskUserActivity extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. */
    detail?: RiskDetail;
    /** The OdataType property */
    odataType?: string;
    /** The type of risk event detected. */
    riskEventTypes?: string[];
}
