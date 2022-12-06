import {EdiscoveryEstimateOperation} from './index';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryEstimateOperation(writer: SerializationWriter, ediscoveryEstimateOperation: EdiscoveryEstimateOperation | undefined = {}) : void {
        serializeCaseOperation(writer, ediscoveryEstimateOperation)
            writer.writeNumberValue("indexedItemCount", ediscoveryEstimateOperation.indexedItemCount);
            writer.writeNumberValue("indexedItemsSize", ediscoveryEstimateOperation.indexedItemsSize);
            writer.writeNumberValue("mailboxCount", ediscoveryEstimateOperation.mailboxCount);
            writer.writeObjectValueFromMethod("search", ediscoveryEstimateOperation.search as any, serializeEdiscoverySearch);
            writer.writeNumberValue("siteCount", ediscoveryEstimateOperation.siteCount);
            writer.writeNumberValue("unindexedItemCount", ediscoveryEstimateOperation.unindexedItemCount);
            writer.writeNumberValue("unindexedItemsSize", ediscoveryEstimateOperation.unindexedItemsSize);
}
