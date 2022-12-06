import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {deserializeIntoEdiscoveryReviewSet} from './deserializeIntoEdiscoveryReviewSet';
import {deserializeIntoEdiscoverySearch} from './deserializeIntoEdiscoverySearch';
import {EdiscoveryAddToReviewSetOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryAddToReviewSetOperation(ediscoveryAddToReviewSetOperation: EdiscoveryAddToReviewSetOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryAddToReviewSetOperation),
        "reviewSet": n => { ediscoveryAddToReviewSetOperation.reviewSet = n.getObject(deserializeIntoEdiscoveryReviewSet) as any ; },
        "search": n => { ediscoveryAddToReviewSetOperation.search = n.getObject(deserializeIntoEdiscoverySearch) as any ; },
    }
}
