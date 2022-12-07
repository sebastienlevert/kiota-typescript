import {LabelPolicy} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLabelPolicy(writer: SerializationWriter, labelPolicy: LabelPolicy | undefined = {}) : void {
            writer.writeStringValue("id", labelPolicy.id);
            writer.writeStringValue("name", labelPolicy.name);
}
