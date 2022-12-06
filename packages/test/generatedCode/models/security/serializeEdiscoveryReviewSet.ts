import {EdiscoveryReviewSet} from './index';
import {serializeDataSet} from './serializeDataSet';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSet(writer: SerializationWriter, ediscoveryReviewSet: EdiscoveryReviewSet | undefined = {}) : void {
        serializeDataSet(writer, ediscoveryReviewSet)
            writer.writeCollectionOfObjectValuesFromMethod("queries", ediscoveryReviewSet.queries as any, serializeEdiscoveryReviewSetQuery);
}
