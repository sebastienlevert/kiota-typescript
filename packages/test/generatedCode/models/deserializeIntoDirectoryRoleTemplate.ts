import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryRoleTemplate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRoleTemplate(directoryRoleTemplate: DirectoryRoleTemplate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryRoleTemplate),
        "description": n => { directoryRoleTemplate.description = n.getStringValue() as any ; },
        "displayName": n => { directoryRoleTemplate.displayName = n.getStringValue() as any ; },
    }
}
