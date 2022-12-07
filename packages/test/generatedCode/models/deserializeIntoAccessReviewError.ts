import {deserializeIntoGenericError} from './deserializeIntoGenericError';
import {AccessReviewError} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewError(accessReviewError: AccessReviewError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoGenericError(accessReviewError),
    }
}
