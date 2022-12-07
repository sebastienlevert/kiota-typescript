import {OutOfOfficeSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutOfOfficeSettings(writer: SerializationWriter, outOfOfficeSettings: OutOfOfficeSettings | undefined = {}) : void {
            writer.writeBooleanValue("isOutOfOffice", outOfOfficeSettings.isOutOfOffice);
            writer.writeStringValue("message", outOfOfficeSettings.message);
}
