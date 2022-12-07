import {Settings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettings(settings: Settings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hasGraphMailbox": n => { settings.hasGraphMailbox = n.getBooleanValue() as any ; },
        "hasLicense": n => { settings.hasLicense = n.getBooleanValue() as any ; },
        "hasOptedOut": n => { settings.hasOptedOut = n.getBooleanValue() as any ; },
    }
}
