import {AccessReviewError} from './index';
import {serializeGenericError} from './serializeGenericError';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewError(writer: SerializationWriter, accessReviewError: AccessReviewError | undefined = {}) : void {
        serializeGenericError(writer, accessReviewError)
}
