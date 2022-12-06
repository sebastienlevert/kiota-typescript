import {deserializeIntoDataSet} from './deserializeIntoDataSet';
import {deserializeIntoEdiscoveryReviewSetQuery} from './deserializeIntoEdiscoveryReviewSetQuery';
import {EdiscoveryReviewSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSet(ediscoveryReviewSet: EdiscoveryReviewSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSet(ediscoveryReviewSet),
        "queries": n => { ediscoveryReviewSet.queries = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewSetQuery) as any ; },
    }
}
