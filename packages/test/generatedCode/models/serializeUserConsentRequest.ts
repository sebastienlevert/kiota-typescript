import {UserConsentRequest} from './index';
import {serializeApproval} from './serializeApproval';
import {serializeRequest} from './serializeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserConsentRequest(writer: SerializationWriter, userConsentRequest: UserConsentRequest | undefined = {}) : void {
        serializeRequest(writer, userConsentRequest)
            writer.writeObjectValueFromMethod("approval", userConsentRequest.approval as any, serializeApproval);
            writer.writeStringValue("reason", userConsentRequest.reason);
}
