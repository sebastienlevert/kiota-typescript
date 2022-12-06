import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {EdgeSearchEngine} from './index';
import {serializeEdgeSearchEngineBase} from './serializeEdgeSearchEngineBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngine(writer: SerializationWriter, edgeSearchEngine: EdgeSearchEngine | undefined = {}) : void {
        serializeEdgeSearchEngineBase(writer, edgeSearchEngine)
            writer.writeEnumValue<EdgeSearchEngineType>("edgeSearchEngineType", edgeSearchEngine.edgeSearchEngineType);
}
