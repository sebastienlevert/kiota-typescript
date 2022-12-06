import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {PersistentBrowserSessionControl} from './index';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersistentBrowserSessionControl(persistentBrowserSessionControl: PersistentBrowserSessionControl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(persistentBrowserSessionControl),
        "mode": n => { persistentBrowserSessionControl.mode = n.getEnumValue<PersistentBrowserSessionMode>(PersistentBrowserSessionMode) as any ; },
    }
}
