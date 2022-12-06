import {deserializeIntoSearch} from './deserializeIntoSearch';
import {EdiscoveryReviewSetQuery} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetQuery(ediscoveryReviewSetQuery: EdiscoveryReviewSetQuery | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSearch(ediscoveryReviewSetQuery),
    }
}
