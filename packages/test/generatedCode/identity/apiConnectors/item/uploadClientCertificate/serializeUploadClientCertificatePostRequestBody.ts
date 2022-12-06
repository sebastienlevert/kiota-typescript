import {UploadClientCertificatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUploadClientCertificatePostRequestBody(writer: SerializationWriter, uploadClientCertificatePostRequestBody: UploadClientCertificatePostRequestBody | undefined = {}) : void {
            writer.writeStringValue("password", uploadClientCertificatePostRequestBody.password);
            writer.writeStringValue("pkcs12Value", uploadClientCertificatePostRequestBody.pkcs12Value);
}
