import {OutOfOfficeSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutOfOfficeSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutOfOfficeSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutOfOfficeSettings();
}
