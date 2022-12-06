import {IosHomeScreenApp} from './index';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenApp(writer: SerializationWriter, iosHomeScreenApp: IosHomeScreenApp | undefined = {}) : void {
        serializeIosHomeScreenItem(writer, iosHomeScreenApp)
            writer.writeStringValue("bundleID", iosHomeScreenApp.bundleID);
}
