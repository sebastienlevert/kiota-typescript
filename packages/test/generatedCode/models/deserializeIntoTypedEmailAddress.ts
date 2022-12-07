import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {EmailType} from './emailType';
import {TypedEmailAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTypedEmailAddress(typedEmailAddress: TypedEmailAddress | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEmailAddress(typedEmailAddress),
        "otherLabel": n => { typedEmailAddress.otherLabel = n.getStringValue() as any ; },
        "type": n => { typedEmailAddress.type = n.getEnumValue<EmailType>(EmailType) as any ; },
    }
}
