import {IdentityGovernance} from './index';
import {serializeAccessReviewSet} from './serializeAccessReviewSet';
import {serializeAppConsentApprovalRoute} from './serializeAppConsentApprovalRoute';
import {serializeEntitlementManagement} from './serializeEntitlementManagement';
import {serializeTermsOfUseContainer} from './serializeTermsOfUseContainer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityGovernance(writer: SerializationWriter, identityGovernance: IdentityGovernance | undefined = {}) : void {
            writer.writeObjectValueFromMethod("accessReviews", identityGovernance.accessReviews as any, serializeAccessReviewSet);
            writer.writeObjectValueFromMethod("appConsent", identityGovernance.appConsent as any, serializeAppConsentApprovalRoute);
            writer.writeObjectValueFromMethod("entitlementManagement", identityGovernance.entitlementManagement as any, serializeEntitlementManagement);
            writer.writeStringValue("@odata.type", identityGovernance.odataType);
            writer.writeObjectValueFromMethod("termsOfUse", identityGovernance.termsOfUse as any, serializeTermsOfUseContainer);
}
