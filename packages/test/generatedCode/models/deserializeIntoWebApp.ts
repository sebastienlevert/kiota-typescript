import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {WebApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebApp(webApp: WebApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(webApp),
        "appUrl": n => { webApp.appUrl = n.getStringValue() as any ; },
        "useManagedBrowser": n => { webApp.useManagedBrowser = n.getBooleanValue() as any ; },
    }
}
