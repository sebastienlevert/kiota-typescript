import {EmailType} from './emailType';
import {TypedEmailAddress} from './index';
import {serializeEmailAddress} from './serializeEmailAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTypedEmailAddress(writer: SerializationWriter, typedEmailAddress: TypedEmailAddress | undefined = {}) : void {
        serializeEmailAddress(writer, typedEmailAddress)
            writer.writeStringValue("otherLabel", typedEmailAddress.otherLabel);
            writer.writeEnumValue<EmailType>("type", typedEmailAddress.type);
}
