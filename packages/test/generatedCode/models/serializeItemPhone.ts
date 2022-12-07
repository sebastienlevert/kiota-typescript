import {ItemPhone} from './index';
import {PhoneType} from './phoneType';
import {serializeItemFacet} from './serializeItemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemPhone(writer: SerializationWriter, itemPhone: ItemPhone | undefined = {}) : void {
        serializeItemFacet(writer, itemPhone)
            writer.writeStringValue("displayName", itemPhone.displayName);
            writer.writeStringValue("number", itemPhone.number);
            writer.writeEnumValue<PhoneType>("type", itemPhone.type);
}
