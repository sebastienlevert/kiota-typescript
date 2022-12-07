import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {deserializeIntoPersonNamePronounciation} from './deserializeIntoPersonNamePronounciation';
import {PersonName} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonName(personName: PersonName | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(personName),
        "displayName": n => { personName.displayName = n.getStringValue() as any ; },
        "first": n => { personName.first = n.getStringValue() as any ; },
        "initials": n => { personName.initials = n.getStringValue() as any ; },
        "languageTag": n => { personName.languageTag = n.getStringValue() as any ; },
        "last": n => { personName.last = n.getStringValue() as any ; },
        "maiden": n => { personName.maiden = n.getStringValue() as any ; },
        "middle": n => { personName.middle = n.getStringValue() as any ; },
        "nickname": n => { personName.nickname = n.getStringValue() as any ; },
        "pronunciation": n => { personName.pronunciation = n.getObject(deserializeIntoPersonNamePronounciation) as any ; },
        "suffix": n => { personName.suffix = n.getStringValue() as any ; },
        "title": n => { personName.title = n.getStringValue() as any ; },
    }
}
