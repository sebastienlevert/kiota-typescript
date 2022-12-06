import {EdgeSearchEngineCustom} from './index';
import {serializeEdgeSearchEngineBase} from './serializeEdgeSearchEngineBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngineCustom(writer: SerializationWriter, edgeSearchEngineCustom: EdgeSearchEngineCustom | undefined = {}) : void {
        serializeEdgeSearchEngineBase(writer, edgeSearchEngineCustom)
            writer.writeStringValue("edgeSearchEngineOpenSearchXmlUrl", edgeSearchEngineCustom.edgeSearchEngineOpenSearchXmlUrl);
}
