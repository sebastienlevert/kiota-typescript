import {AccessReviewError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewError();
}
