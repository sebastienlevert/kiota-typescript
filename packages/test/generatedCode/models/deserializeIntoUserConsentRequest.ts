import {deserializeIntoApproval} from './deserializeIntoApproval';
import {deserializeIntoRequest} from './deserializeIntoRequest';
import {UserConsentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserConsentRequest(userConsentRequest: UserConsentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRequest(userConsentRequest),
        "approval": n => { userConsentRequest.approval = n.getObject(deserializeIntoApproval) as any ; },
        "reason": n => { userConsentRequest.reason = n.getStringValue() as any ; },
    }
}
