import {Compliance} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCompliance(writer: SerializationWriter, compliance: Compliance | undefined = {}) : void {
            writer.writeStringValue("@odata.type", compliance.odataType);
}
