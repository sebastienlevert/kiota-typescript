import {EdiscoveryAddToReviewSetOperation} from './index';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryAddToReviewSetOperation(writer: SerializationWriter, ediscoveryAddToReviewSetOperation: EdiscoveryAddToReviewSetOperation | undefined = {}) : void {
        serializeCaseOperation(writer, ediscoveryAddToReviewSetOperation)
            writer.writeObjectValueFromMethod("reviewSet", ediscoveryAddToReviewSetOperation.reviewSet as any, serializeEdiscoveryReviewSet);
            writer.writeObjectValueFromMethod("search", ediscoveryAddToReviewSetOperation.search as any, serializeEdiscoverySearch);
}
