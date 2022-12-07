import {VerifiedPublisher} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVerifiedPublisher(writer: SerializationWriter, verifiedPublisher: VerifiedPublisher | undefined = {}) : void {
            writer.writeDateValue("addedDateTime", verifiedPublisher.addedDateTime);
            writer.writeStringValue("displayName", verifiedPublisher.displayName);
            writer.writeStringValue("verifiedPublisherId", verifiedPublisher.verifiedPublisherId);
}
