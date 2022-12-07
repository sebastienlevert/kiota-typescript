import {AlternativeSecurityId} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlternativeSecurityId(writer: SerializationWriter, alternativeSecurityId: AlternativeSecurityId | undefined = {}) : void {
            writer.writeStringValue("identityProvider", alternativeSecurityId.identityProvider);
            writer.writeStringValue("key", alternativeSecurityId.key);
            writer.writeNumberValue("type", alternativeSecurityId.type);
}
