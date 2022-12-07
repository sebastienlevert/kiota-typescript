import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ProfilePhoto} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProfilePhoto(profilePhoto: ProfilePhoto | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(profilePhoto),
        "height": n => { profilePhoto.height = n.getNumberValue() as any ; },
        "width": n => { profilePhoto.width = n.getNumberValue() as any ; },
    }
}
