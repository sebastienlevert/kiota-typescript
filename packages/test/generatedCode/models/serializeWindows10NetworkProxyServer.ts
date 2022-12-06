import {Windows10NetworkProxyServer} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10NetworkProxyServer(writer: SerializationWriter, windows10NetworkProxyServer: Windows10NetworkProxyServer | undefined = {}) : void {
            writer.writeStringValue("address", windows10NetworkProxyServer.address);
            writer.writeCollectionOfPrimitiveValues<string>("exceptions", windows10NetworkProxyServer.exceptions);
            writer.writeStringValue("@odata.type", windows10NetworkProxyServer.odataType);
            writer.writeBooleanValue("useForLocalAddresses", windows10NetworkProxyServer.useForLocalAddresses);
}
