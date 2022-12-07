import {PersonNamePronounciation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonNamePronounciation(personNamePronounciation: PersonNamePronounciation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { personNamePronounciation.displayName = n.getStringValue() as any ; },
        "first": n => { personNamePronounciation.first = n.getStringValue() as any ; },
        "last": n => { personNamePronounciation.last = n.getStringValue() as any ; },
        "maiden": n => { personNamePronounciation.maiden = n.getStringValue() as any ; },
        "middle": n => { personNamePronounciation.middle = n.getStringValue() as any ; },
    }
}
