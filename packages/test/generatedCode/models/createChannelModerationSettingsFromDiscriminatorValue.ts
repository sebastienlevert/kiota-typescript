import {ChannelModerationSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelModerationSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelModerationSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelModerationSettings();
}
