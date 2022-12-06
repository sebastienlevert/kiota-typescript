import {EdgeSearchEngineBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngineBase(writer: SerializationWriter, edgeSearchEngineBase: EdgeSearchEngineBase | undefined = {}) : void {
            writer.writeStringValue("@odata.type", edgeSearchEngineBase.odataType);
}
