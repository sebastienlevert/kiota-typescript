import {SearchHit} from './index';
import {serializeEntity} from './serializeEntity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchHit(writer: SerializationWriter, searchHit: SearchHit | undefined = {}) : void {
            writer.writeStringValue("contentSource", searchHit.contentSource);
            writer.writeStringValue("hitId", searchHit.hitId);
            writer.writeStringValue("@odata.type", searchHit.odataType);
            writer.writeNumberValue("rank", searchHit.rank);
            writer.writeObjectValueFromMethod("resource", searchHit.resource as any, serializeEntity);
            writer.writeStringValue("resultTemplateId", searchHit.resultTemplateId);
            writer.writeStringValue("summary", searchHit.summary);
}
