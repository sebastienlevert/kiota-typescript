import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MacOSMicrosoftEdgeApp} from './index';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMicrosoftEdgeApp(macOSMicrosoftEdgeApp: MacOSMicrosoftEdgeApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSMicrosoftEdgeApp),
        "channel": n => { macOSMicrosoftEdgeApp.channel = n.getEnumValue<MicrosoftEdgeChannel>(MicrosoftEdgeChannel) as any ; },
    }
}
