import {AccessReviewSet, AppConsentApprovalRoute, EntitlementManagement, TermsOfUseContainer} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityGovernance extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The accessReviews property */
    accessReviews?: AccessReviewSet;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The appConsent property */
    appConsent?: AppConsentApprovalRoute;
    /** The entitlementManagement property */
    entitlementManagement?: EntitlementManagement;
    /** The OdataType property */
    odataType?: string;
    /** The termsOfUse property */
    termsOfUse?: TermsOfUseContainer;
}
