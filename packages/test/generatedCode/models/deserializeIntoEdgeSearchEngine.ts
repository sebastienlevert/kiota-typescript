import {deserializeIntoEdgeSearchEngineBase} from './deserializeIntoEdgeSearchEngineBase';
import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {EdgeSearchEngine} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngine(edgeSearchEngine: EdgeSearchEngine | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEdgeSearchEngineBase(edgeSearchEngine),
        "edgeSearchEngineType": n => { edgeSearchEngine.edgeSearchEngineType = n.getEnumValue<EdgeSearchEngineType>(EdgeSearchEngineType) as any ; },
    }
}
