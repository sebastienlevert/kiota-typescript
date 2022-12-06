import {ProfilePhoto} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProfilePhoto(writer: SerializationWriter, profilePhoto: ProfilePhoto | undefined = {}) : void {
        serializeEntity(writer, profilePhoto)
            writer.writeNumberValue("height", profilePhoto.height);
            writer.writeNumberValue("width", profilePhoto.width);
}
