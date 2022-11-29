import {Entity} from './entity';
import {Extension} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtension(writer: SerializationWriter, extension: Extension | undefined = {}) : void {
        serializeEntityInterface(extension)
}
