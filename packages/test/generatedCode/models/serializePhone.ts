import {Phone} from './index';
import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhone(writer: SerializationWriter, phone: Phone | undefined = {}) : void {
            writer.writeStringValue("number", phone.number);
            writer.writeEnumValue<PhoneType>("type", phone.type);
}
