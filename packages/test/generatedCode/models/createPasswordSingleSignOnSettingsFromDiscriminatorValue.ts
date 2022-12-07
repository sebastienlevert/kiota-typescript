import {PasswordSingleSignOnSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordSingleSignOnSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordSingleSignOnSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordSingleSignOnSettings();
}
