import {MacOSMicrosoftEdgeApp} from './index';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSMicrosoftEdgeApp(writer: SerializationWriter, macOSMicrosoftEdgeApp: MacOSMicrosoftEdgeApp | undefined = {}) : void {
        serializeMobileApp(writer, macOSMicrosoftEdgeApp)
            writer.writeEnumValue<MicrosoftEdgeChannel>("channel", macOSMicrosoftEdgeApp.channel);
}
