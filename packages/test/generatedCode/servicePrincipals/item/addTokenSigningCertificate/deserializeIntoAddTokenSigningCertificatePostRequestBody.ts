import {AddTokenSigningCertificatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddTokenSigningCertificatePostRequestBody(addTokenSigningCertificatePostRequestBody: AddTokenSigningCertificatePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { addTokenSigningCertificatePostRequestBody.displayName = n.getStringValue() as any ; },
        "endDateTime": n => { addTokenSigningCertificatePostRequestBody.endDateTime = n.getDateValue() as any ; },
    }
}
