import {Settings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Settings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Settings();
}
