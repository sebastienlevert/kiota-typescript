import {AdminConsentRequestPolicy} from './index';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdminConsentRequestPolicy(writer: SerializationWriter, adminConsentRequestPolicy: AdminConsentRequestPolicy | undefined = {}) : void {
        serializeEntity(writer, adminConsentRequestPolicy)
            writer.writeBooleanValue("isEnabled", adminConsentRequestPolicy.isEnabled);
            writer.writeBooleanValue("notifyReviewers", adminConsentRequestPolicy.notifyReviewers);
            writer.writeBooleanValue("remindersEnabled", adminConsentRequestPolicy.remindersEnabled);
            writer.writeNumberValue("requestDurationInDays", adminConsentRequestPolicy.requestDurationInDays);
            writer.writeCollectionOfObjectValuesFromMethod("reviewers", adminConsentRequestPolicy.reviewers as any, serializeAccessReviewReviewerScope);
            writer.writeNumberValue("version", adminConsentRequestPolicy.version);
}
