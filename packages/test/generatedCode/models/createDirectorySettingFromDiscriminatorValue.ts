import {DirectorySetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectorySettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectorySetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectorySetting();
}
