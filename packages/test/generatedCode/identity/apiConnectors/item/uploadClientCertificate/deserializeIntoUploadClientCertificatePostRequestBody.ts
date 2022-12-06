import {UploadClientCertificatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUploadClientCertificatePostRequestBody(uploadClientCertificatePostRequestBody: UploadClientCertificatePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "password": n => { uploadClientCertificatePostRequestBody.password = n.getStringValue() as any ; },
        "pkcs12Value": n => { uploadClientCertificatePostRequestBody.pkcs12Value = n.getStringValue() as any ; },
    }
}
