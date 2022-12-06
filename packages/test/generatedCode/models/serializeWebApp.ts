import {WebApp} from './index';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebApp(writer: SerializationWriter, webApp: WebApp | undefined = {}) : void {
        serializeMobileApp(writer, webApp)
            writer.writeStringValue("appUrl", webApp.appUrl);
            writer.writeBooleanValue("useManagedBrowser", webApp.useManagedBrowser);
}
