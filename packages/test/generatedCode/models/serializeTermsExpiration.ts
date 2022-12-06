import {TermsExpiration} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsExpiration(writer: SerializationWriter, termsExpiration: TermsExpiration | undefined = {}) : void {
            writer.writeDurationValue("frequency", termsExpiration.frequency);
            writer.writeStringValue("@odata.type", termsExpiration.odataType);
            writer.writeDateValue("startDateTime", termsExpiration.startDateTime);
}
