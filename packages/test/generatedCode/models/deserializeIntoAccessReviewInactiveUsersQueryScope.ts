import {deserializeIntoAccessReviewQueryScope} from './deserializeIntoAccessReviewQueryScope';
import {AccessReviewInactiveUsersQueryScope} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInactiveUsersQueryScope(accessReviewInactiveUsersQueryScope: AccessReviewInactiveUsersQueryScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewQueryScope(accessReviewInactiveUsersQueryScope),
        "inactiveDuration": n => { accessReviewInactiveUsersQueryScope.inactiveDuration = n.getDurationValue() as any ; },
    }
}
