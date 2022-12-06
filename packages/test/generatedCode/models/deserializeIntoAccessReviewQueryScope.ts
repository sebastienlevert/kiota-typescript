import {deserializeIntoAccessReviewScope} from './deserializeIntoAccessReviewScope';
import {AccessReviewQueryScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewQueryScope(accessReviewQueryScope: AccessReviewQueryScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewScope(accessReviewQueryScope),
        "query": n => { accessReviewQueryScope.query = n.getStringValue() as any ; },
        "queryRoot": n => { accessReviewQueryScope.queryRoot = n.getStringValue() as any ; },
        "queryType": n => { accessReviewQueryScope.queryType = n.getStringValue() as any ; },
    }
}
