import {AddTokenSigningCertificatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddTokenSigningCertificatePostRequestBody(writer: SerializationWriter, addTokenSigningCertificatePostRequestBody: AddTokenSigningCertificatePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("displayName", addTokenSigningCertificatePostRequestBody.displayName);
            writer.writeDateValue("endDateTime", addTokenSigningCertificatePostRequestBody.endDateTime);
}
