import {LabelActionBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLabelActionBase(writer: SerializationWriter, labelActionBase: LabelActionBase | undefined = {}) : void {
            writer.writeStringValue("name", labelActionBase.name);
}
