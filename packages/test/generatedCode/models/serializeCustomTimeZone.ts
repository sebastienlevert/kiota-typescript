import {CustomTimeZone} from './index';
import {serializeDaylightTimeZoneOffset} from './serializeDaylightTimeZoneOffset';
import {serializeStandardTimeZoneOffset} from './serializeStandardTimeZoneOffset';
import {serializeTimeZoneBase} from './serializeTimeZoneBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTimeZone(writer: SerializationWriter, customTimeZone: CustomTimeZone | undefined = {}) : void {
        serializeTimeZoneBase(writer, customTimeZone)
            writer.writeNumberValue("bias", customTimeZone.bias);
            writer.writeObjectValueFromMethod("daylightOffset", customTimeZone.daylightOffset as any, serializeDaylightTimeZoneOffset);
            writer.writeObjectValueFromMethod("standardOffset", customTimeZone.standardOffset as any, serializeStandardTimeZoneOffset);
}
