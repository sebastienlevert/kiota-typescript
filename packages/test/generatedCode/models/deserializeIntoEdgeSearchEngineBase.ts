import {EdgeSearchEngineBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngineBase(edgeSearchEngineBase: EdgeSearchEngineBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { edgeSearchEngineBase.odataType = n.getStringValue() as any ; },
    }
}
