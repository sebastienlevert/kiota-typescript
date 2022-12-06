import {EdiscoveryReviewSetQuery} from './index';
import {serializeSearch} from './serializeSearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryReviewSetQuery(writer: SerializationWriter, ediscoveryReviewSetQuery: EdiscoveryReviewSetQuery | undefined = {}) : void {
        serializeSearch(writer, ediscoveryReviewSetQuery)
}
