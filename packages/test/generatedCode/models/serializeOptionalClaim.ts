import {OptionalClaim} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOptionalClaim(writer: SerializationWriter, optionalClaim: OptionalClaim | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("additionalProperties", optionalClaim.additionalProperties);
            writer.writeBooleanValue("essential", optionalClaim.essential);
            writer.writeStringValue("name", optionalClaim.name);
            writer.writeStringValue("@odata.type", optionalClaim.odataType);
            writer.writeStringValue("source", optionalClaim.source);
}
