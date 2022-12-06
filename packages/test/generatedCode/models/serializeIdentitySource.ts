import {IdentitySource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentitySource(writer: SerializationWriter, identitySource: IdentitySource | undefined = {}) : void {
            writer.writeStringValue("@odata.type", identitySource.odataType);
}
