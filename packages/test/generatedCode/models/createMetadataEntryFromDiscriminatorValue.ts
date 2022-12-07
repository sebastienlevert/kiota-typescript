import {MetadataEntry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMetadataEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) : MetadataEntry {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MetadataEntry();
}
