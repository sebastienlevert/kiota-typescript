import {TimeZoneBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeZoneBase(writer: SerializationWriter, timeZoneBase: TimeZoneBase | undefined = {}) : void {
            writer.writeStringValue("name", timeZoneBase.name);
}
