import {DriveItemSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveItemSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveItemSource();
}
