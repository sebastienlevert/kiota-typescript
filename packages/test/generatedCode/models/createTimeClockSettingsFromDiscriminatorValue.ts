import {TimeClockSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeClockSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeClockSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeClockSettings();
}
