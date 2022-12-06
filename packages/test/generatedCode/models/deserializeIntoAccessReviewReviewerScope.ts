import {AccessReviewReviewerScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewReviewerScope(accessReviewReviewerScope: AccessReviewReviewerScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewReviewerScope.odataType = n.getStringValue() as any ; },
        "query": n => { accessReviewReviewerScope.query = n.getStringValue() as any ; },
        "queryRoot": n => { accessReviewReviewerScope.queryRoot = n.getStringValue() as any ; },
        "queryType": n => { accessReviewReviewerScope.queryType = n.getStringValue() as any ; },
    }
}
