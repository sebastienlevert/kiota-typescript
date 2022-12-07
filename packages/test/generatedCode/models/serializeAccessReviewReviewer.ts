import {AccessReviewReviewer} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewer(writer: SerializationWriter, accessReviewReviewer: AccessReviewReviewer | undefined = {}) : void {
        serializeEntity(writer, accessReviewReviewer)
            writer.writeDateValue("createdDateTime", accessReviewReviewer.createdDateTime);
            writer.writeStringValue("displayName", accessReviewReviewer.displayName);
            writer.writeStringValue("userPrincipalName", accessReviewReviewer.userPrincipalName);
}
