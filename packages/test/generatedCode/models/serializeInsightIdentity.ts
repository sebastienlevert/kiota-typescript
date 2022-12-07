import {InsightIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInsightIdentity(writer: SerializationWriter, insightIdentity: InsightIdentity | undefined = {}) : void {
            writer.writeStringValue("address", insightIdentity.address);
            writer.writeStringValue("displayName", insightIdentity.displayName);
            writer.writeStringValue("id", insightIdentity.id);
}
