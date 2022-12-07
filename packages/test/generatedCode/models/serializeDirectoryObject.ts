import {DirectoryObject} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObject(writer: SerializationWriter, directoryObject: DirectoryObject | undefined = {}) : void {
        serializeEntity(writer, directoryObject)
            writer.writeDateValue("deletedDateTime", directoryObject.deletedDateTime);
}
