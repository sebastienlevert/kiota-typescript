import {IosDeviceType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosDeviceType(writer: SerializationWriter, iosDeviceType: IosDeviceType | undefined = {}) : void {
            writer.writeBooleanValue("iPad", iosDeviceType.iPad);
            writer.writeBooleanValue("iPhoneAndIPod", iosDeviceType.iPhoneAndIPod);
            writer.writeStringValue("@odata.type", iosDeviceType.odataType);
}
