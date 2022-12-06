import {deserializeIntoEdgeSearchEngineBase} from './deserializeIntoEdgeSearchEngineBase';
import {EdgeSearchEngineCustom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngineCustom(edgeSearchEngineCustom: EdgeSearchEngineCustom | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEdgeSearchEngineBase(edgeSearchEngineCustom),
        "edgeSearchEngineOpenSearchXmlUrl": n => { edgeSearchEngineCustom.edgeSearchEngineOpenSearchXmlUrl = n.getStringValue() as any ; },
    }
}
