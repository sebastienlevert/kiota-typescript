import {UploadSession} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUploadSession(writer: SerializationWriter, uploadSession: UploadSession | undefined = {}) : void {
            writer.writeDateValue("expirationDateTime", uploadSession.expirationDateTime);
            writer.writeCollectionOfPrimitiveValues<string>("nextExpectedRanges", uploadSession.nextExpectedRanges);
            writer.writeStringValue("@odata.type", uploadSession.odataType);
            writer.writeStringValue("uploadUrl", uploadSession.uploadUrl);
}
